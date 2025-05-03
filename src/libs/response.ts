import * as uWS from 'uWebSockets.js';
import { InternalServerError, isHttpError } from 'http-errors';
import { StatusCodes } from 'http-status-codes';
import logger from './logger';

export const getBufferFile = (res: uWS.HttpResponse): Promise<Buffer[]> => {
  let chunks: Buffer[] = [];

	return new Promise((resolve, reject) => {
		res.onData((chunk: ArrayBuffer, isLast: boolean) => {
			const chunkBuffer = Buffer.from(new Uint8Array(chunk));
			chunks.push(chunkBuffer);

			if (isLast) {
				resolve(chunks);
			}
		});
		res.onAborted(() => {
			reject(new InternalServerError('File Request aborted'));
		});
	});
}

export const sendResponseSuccess = (res: uWS.HttpResponse, data: any, status?: StatusCodes) => {
	const statusCode = status || StatusCodes.OK; 
	res.cork(() => {
		res.writeStatus(`${statusCode} OK`)
			.writeHeader('Content-Type', 'application/json')
			.end(JSON.stringify(data));
	});
}

export const sendResponseError = (res: uWS.HttpResponse, error: any) => {
	logger.error(error);
	const status = isHttpError(error) ? error.statusCode : StatusCodes.INTERNAL_SERVER_ERROR;
	const message = isHttpError(error)? error.message : 'Internal Server Error';
  
	res.cork(() => {
		res.writeStatus(`${status} ${message}`)
			.writeHeader('Content-Type', 'application/json')
			.end(JSON.stringify({ status, message }));
	});
}
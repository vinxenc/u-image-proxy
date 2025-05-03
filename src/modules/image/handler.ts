import * as uWS from 'uWebSockets.js';
import { BadRequest } from 'http-errors';
import { randomUUID } from 'crypto';
import { getBufferFile, sendResponseError, sendResponseSuccess } from '../../libs/response';
import { detectBufferMime } from 'mime-detect';
import { FileSystemAdapter } from '../../adapters/fs-adapter';

export const imageUploadHandler = async (res: uWS.HttpResponse,req: uWS.HttpRequest) => {
	try {
		const adapter = new FileSystemAdapter();
		
		const buffers = await getBufferFile(res);
		const buffer = Buffer.concat(buffers);
		const fileType = await detectBufferMime(buffer);
		const [type, extension] = fileType.split('/');
	// validate file type
		if (type !== 'image' || !['jpg', 'jpeg', 'png', 'webp'].includes(extension)) {
			throw new BadRequest('Invalid file type');
		}
		const filename = `${randomUUID()}.${extension}`;

		await adapter.putObject({ body: buffer, key: filename });

		return sendResponseSuccess(res, { key: filename });
	} catch (error) {
		return sendResponseError(res, error);
	}
}
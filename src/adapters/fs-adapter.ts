import * as fs from 'fs';
import * as path from 'path';

interface PutObjectParams {
  body: Buffer;
  key: string;
}

interface StorageAdapter {
  putObject(input: PutObjectParams): Promise<string>;
  // deleteFile(filename: string): Promise<void>;
  // fileExists(filename: string): Promise<boolean>;
}


export class FileSystemAdapter implements StorageAdapter {
  private bucket: string = '.bucket';

  constructor() {
    // Create base directory if it doesn't exist
    if (!fs.existsSync(this.bucket)) {
      fs.mkdirSync(this.bucket, { recursive: true })
    }
  }

  async putObject(input: PutObjectParams): Promise<string> {
    const { body, key } = input;
    const filePath = path.join(this.bucket, key);
    await fs.promises.writeFile(filePath, body);
    return filePath;
  }
	
}

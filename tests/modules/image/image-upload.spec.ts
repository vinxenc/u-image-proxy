import fs from 'fs';
import path from 'path';
// import FormData from 'form-data';

// Assuming your server runs on this URL during tests
const API_URL = 'http://localhost:3000';

describe('Image Upload E2E Tests', () => {
  it('should successfully upload an image', async () => {
    const imagePath = path.join(__dirname, '../../fixtures/sample-image.png');
    const imageBuffer = fs.readFileSync(imagePath);

    const response = await fetch(`${API_URL}/api/images/upload`, {
      method: "POST",
      headers: {
        'Content-Type': 'image/png'
      },
      body: imageBuffer,
      redirect: "follow"
    })


    // Assert the response
    expect(response.status).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('key');
    expect(typeof data.key).toBe('string');
    expect(data.key).toMatch(/\.png$/);
  });

  it('should reject non-image files', async () => {
    const textBuffer = Buffer.from('This is not an image');

    const response = await fetch(`${API_URL}/api/images/upload`, {
      method: "POST",
      headers: {
        'Content-Type': 'image/png'
      },
      body: textBuffer,
      redirect: "follow"
    })

		const data = await response.json();

    // Assert the response
    expect(response.status).toBe(400);
    expect(data).toHaveProperty('message');
    expect(data.message).toBe('Invalid file type');
    expect(response.status).toBe(400);
  });
});
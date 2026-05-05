const fs = require('fs');

const dummyPng = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABLUlEQVR42u3TMWoCURiG0ZdHjK023sC2iIIghQTS29jZ2k2axL9w0X+54P1w4GG4uX3zMw/1er3Z/Dqfzwe22y1Xq1Vot9sQ/e/v12jF0gUolwKU2s/n8/B6vcLpdArX6zU0m01oNBqhXq9Dt9uFfr8Po9EoNJtNv8hYQIQgQhAhiBBECCIEEYIIQYQgQhAhiBBECCIEEYIIQYQgQhAhiBBECCIEEYIIQYQgQhAhiBBECCIEEYIIQYQgQhAhiBBECCIEEYIIQYQgQhAhiBBECCIEEYIIQYQgQhAhiBBECCIEEYIIQYQgQhAhiBBECCIEEYIIQYQgQhAhiBBECCIEEYIIQYQgQhAhiBBECCIEEYIIQYQgQhAhiBBECCIEEYIIQYQgQrx/v7H6a0C99Auo9fP3wAs7oD0H1/cEHQAAAABJRU5ErkJggg==", 'base64');

if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}
fs.writeFileSync('public/logo.png', dummyPng);
fs.writeFileSync('public/favicon.png', dummyPng);
fs.writeFileSync('public/iniciais.png', dummyPng);

console.log('Dummy PNGs created in public directory');

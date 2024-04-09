import { FileStorageLibrary } from "../src/fileStorageLibrary";
import { ImageProcessingLibrary } from "../src/imageProcessingLibrary";

describe('imageProcessingLibrary tests', () => {
    it('should file processing is complete', async () => {
        // Arrange
        const sut = new ImageProcessingLibrary();
        const message= "Saving file content face to path 1.jpg";
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

        // Act
        sut.processImage('','');

        // Assert
        expect(consoleLogSpy).toBeCalledTimes(2);
    })
})
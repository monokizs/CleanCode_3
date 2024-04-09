import { FileStorageLibrary } from "../src/fileStorageLibrary";
import { ImageProcessingLibrary } from "../src/imageProcessingLibrary";

describe('imageProcessingLibrary tests', () => {
    it('should file processing is complete', async () => {
        // Arrange
        const sut = new ImageProcessingLibrary();
        const message= "Processing image from to ";
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

        // Act
        sut.processImage('','');

        // Assert
        expect(consoleLogSpy).toBeCalledTimes(2);
        //expect(consoleLogSpy).toHaveBeenCalledWith(message);
    })
})
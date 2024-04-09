import { FileStorageLibrary } from "../src/fileStorageLibrary";

describe('fileStorageLibrary tests', () => {
    it('should file storage is complete', async () => {
        // Arrange
        const sut = new FileStorageLibrary();
        const message= "Saving file content face to path 1.jpg";
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

        // Act
        sut.saveContentIntoFile('','');

        // Assert
        expect(consoleLogSpy).toBeCalledTimes(2);
        //expect(consoleLogSpy).toHaveBeenCalledWith(message);
    })
})

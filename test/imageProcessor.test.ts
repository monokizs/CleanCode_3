import { mock, mockReset } from "jest-mock-extended";
import { ImageProcessingLibrary } from "../src/imageProcessingLibrary";
import { ImageProcessor } from "../src/imageProcessor";
import { FileStorageLibrary } from "../src/fileStorageLibrary";
import { InvalidImageException } from "../src/Errors/invalidImageException";


describe('ImageProcessor tests', () => {
    let sut: ImageProcessor;
    const mockImageProcessingLibrary = mock<ImageProcessingLibrary>();
    const mockFileStorageLibrary = mock<FileStorageLibrary>();
    

    beforeEach(() => {
        mockReset(mockImageProcessingLibrary);
        mockReset(mockFileStorageLibrary);
        sut = new ImageProcessor(mockImageProcessingLibrary, mockFileStorageLibrary);
    })

    describe('Happy path', () => {
        it('should image processing and save image', async () => {
            // Arrange
    
            // Act
            await sut.processAndSaveImage("E:/SOURCE/1.jpg","E:/DESTINATION/1.png");
    
            // Assert
            expect(mockFileStorageLibrary.saveContentIntoFile).toBeCalledTimes(1);
            expect(mockImageProcessingLibrary.processImage).toBeCalledTimes(1);
        })
    })

    describe('Error path', () => {
        it('should image is not jpg', async () => {
            // Arrange
            /*const error = new Error("Invalid image format. Only JPG images are supported.");
            const expectedError=new InvalidImageException("Database error happened.", error);
            mockDbClient.saveIntoDatabase.mockImplementation(() => { throw error });*/
    
            // Act and Assert
            /*await expect(sut.migrate()).rejects.toThrow(expectedError);
            expect(mockApiClient.downloadUsernames).toBeCalledTimes(1);
            expect(mockDbClient.saveIntoDatabase).toBeCalledTimes(1);
            expect(mockDbClient.saveIntoDatabase).toBeCalledWith(apiResult);*/
        })

    })
})


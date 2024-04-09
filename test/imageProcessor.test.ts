import { mock, mockReset } from "jest-mock-extended";
import { ImageProcessingLibrary } from "../src/imageProcessingLibrary";
import { ImageProcessor } from "../src/imageProcessor";
import { FileStorageLibrary } from "../src/fileStorageLibrary";
import { InvalidImageException } from "../src/Errors/invalidImageException";
import { ProcessingErrorException } from "../src/Errors/processingErrorException";


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
            const error = new Error("Invalid image format. Only JPG images are supported.");
            const expectedError=new InvalidImageException("Invalid image format. Only JPG images are supported.");
            mockImageProcessingLibrary.processImage.mockImplementation(() => { throw error });
                
            // Act and Assert
            await expect(sut.processAndSaveImage('','')).rejects.toThrow(expectedError);
            expect(mockImageProcessingLibrary.processImage).toBeCalledTimes(0);
            expect(mockFileStorageLibrary.saveContentIntoFile).toBeCalledTimes(0);
        })
        
        it('should process error', async () => {
            // Arrange
            const error = new Error("An error occurred during image processing.");
            const expectedError=new ProcessingErrorException("An error occurred during image processing.");
            mockImageProcessingLibrary.processImage.mockImplementation(() => { throw error });
                
            // Act and Assert
            await expect(sut.processAndSaveImage('1.jpg','2.png')).rejects.toThrow(expectedError);
            expect(mockImageProcessingLibrary.processImage).toBeCalledTimes(1);
            expect(mockFileStorageLibrary.saveContentIntoFile).toBeCalledTimes(0);
        })

        it('should unknown error', async () => {
            // Arrange
            const error = new Error("An unknown error occurred during image processing.");
            const expectedError=new Error("An unknown error occurred during image processing.");
            mockImageProcessingLibrary.processImage.mockImplementation(() => { throw error });
                
            // Act and Assert
            await expect(sut.processAndSaveImage('1.jpg','2.png')).rejects.toThrow(expectedError);
            expect(mockImageProcessingLibrary.processImage).toBeCalledTimes(1);
            expect(mockFileStorageLibrary.saveContentIntoFile).toBeCalledTimes(0);
        })

        it('should file save error', async () => {
            // Arrange
            const error = new Error("An unknown error occurred during file save.");
            const expectedError=new InvalidImageException("An unknown error occurred during file save.");
            mockFileStorageLibrary.saveContentIntoFile.mockImplementation(() => { throw error });
                
            // Act and Assert
            await expect(sut.processAndSaveImage('1.jpg','2.png')).rejects.toThrow(expectedError);
            expect(mockImageProcessingLibrary.processImage).toBeCalledTimes(1);
            expect(mockFileStorageLibrary.saveContentIntoFile).toBeCalledTimes(1);
        })

    })
})


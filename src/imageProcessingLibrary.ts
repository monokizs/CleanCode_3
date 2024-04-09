export class ImageProcessingLibrary { 
	public async processImage(inputPath: string, outputPath: string): Promise<string> { 
		console.log(`Processing image from ${inputPath} to ${outputPath}`); 
		return await this.done();  
	} 

	private async done(){
		new Promise(resolve => setTimeout(resolve, 1000)); 
		console.log(`Image processed successfully`); 
		return 'processed image content';
	}

} 
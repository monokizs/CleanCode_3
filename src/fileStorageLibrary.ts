export class FileStorageLibrary { 
	public async saveContentIntoFile(filePath: string, content: string): Promise<void> { 
		console.log(`Saving file content ${content} to path ${filePath}`); 
		await this.done();
	} 

	private async done(){
		new Promise(resolve => setTimeout(resolve, 500)); 
		console.log(`File saved successfully`);
	}
} 

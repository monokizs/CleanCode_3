export class ProcessingErrorException extends Error { 
	constructor(message: string) { 
		super(message);
		this.name = 'ProcessingErrorException'; 
	} 
} 
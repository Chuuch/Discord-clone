'use client';

import { X } from 'lucide-react';
import Image from 'next/image';

import { UploadDropzone } from "@/lib/uploadthing";

import '@uploadthing/react/styles.css'

interface FileUploadProps {
	endpoint: 'messageFile' | 'serverImage';
	onChange: (url?: string) => void;
	value: string;
}

export const FileUpload = ({ endpoint, onChange, value }: FileUploadProps) => {
	const fileType = value?.split('.').pop();

	if (value && fileType !== 'pdf') {
		return (
			<div className='relative h-20 w-20'>
				<Image 
					src={value}
					fill
					alt='Upload'
					className='rounded-full'/>
			</div>
		)
	}

	return (
		<UploadDropzone
            endpoint={endpoint}
			onClientUploadComplete={(res) => {
				onChange(res?.[0].url);
			}}
			onUploadError={(error: Error) => {
				console.log(error);
			}}
        />
	);
};

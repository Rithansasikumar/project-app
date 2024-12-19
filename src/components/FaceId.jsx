import React from 'react'
import CustomButton from './CustomButton'
import { AlertCircle } from 'lucide-react'

const FaceId = () => {
	return (
		<div className="p-6 space-y-4 min-h-fit">
			<div className="flex items-center justify-center">
				<img src="/Images/FaceImage.svg" alt="faceId" className="max-w-96" />
			</div>
			<div className="flex flex-col items-center justify-center gap-4">
			<p className="text-lg font-medium text-white">
        Please face your camera to start the facial Authenication process.
      </p>
      
      <div className="flex items-start justify-center gap-8 mt-2">
        <div className="flex items-center gap-2">
          <AlertCircle className="text-[#FF3B6B] w-6 h-6" />
          <p className="text-sm text-white/70">
            No photo or image of will be saved during your enrollment
          </p>
        </div>

        <div className="flex items-center gap-2">
          <AlertCircle className="text-[#FF3B6B] w-6 h-6" />
          <p className="text-sm text-white/70">
            Only an anonymized feature vector that cannot reverse engineered!
          </p>
        </div>
      </div>
				<CustomButton className="mt-4" icon={false}>
					Start Scanning
				</CustomButton>
			</div>
		</div>
	)
}

export default FaceId
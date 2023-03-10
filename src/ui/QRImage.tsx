import { Box, HTMLChakraProps } from "@chakra-ui/react";
import saveAs from "file-saver";
import { QRCode } from "react-qrcode-logo";

interface Props extends Partial<HTMLChakraProps<"div">> {
  value: string;
  bgColor: string;
  fgColor: string;
  logoImage: string;
}
  
export function QRImage({ value, bgColor, fgColor, logoImage, ...rest}: Props) {

    const onClickImage = () => {
      (document.getElementById("qrCode") as HTMLCanvasElement).toBlob((blob) => {
        if (blob) saveAs(blob, 'qr_code');
      });
    }
  
    return (
      <Box cursor='pointer' border='1px' borderStyle='dashed' onClick={onClickImage} {...rest}>
        <QRCode 
          value={value} 
          id='qrCode'
          ecLevel="H" // error correction, High due to the embedded logo
          size={700}
          bgColor={bgColor}
          fgColor={fgColor}
          logoImage={logoImage}
        
          // TODO ask design team for guidelines on defaults for these
          quietZone={50} // padding around the code
          logoWidth={200}
          logoPadding={20}
          logoPaddingStyle='square' // circle or square
          qrStyle='squares' // squares or dots
          eyeRadius={15} // https://github.com/gcoro/react-qrcode-logo/blob/HEAD/res/eyeRadius_doc.md
        />
      </Box>
    );
  }
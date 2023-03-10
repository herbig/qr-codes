import { Button, Flex, Image, Spacer, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { QRImage } from "./QRImage";
import { ColorPicker } from "./ColorPicker";
import { Uploader } from "./Uploader";
import { LabeledInput } from "./LabeledInput";
import IMG_DECENT from "../assets/img_decent.jpg"
import IMG_FRACTAL from "../assets/img_fractal.png"
import IMG_SARCO from "../assets/img_sarco.jpg"
import ICON_DELETE from "../assets/icon_delete.svg"

export const BUTTON_SIZE = 110;

const BACKGROUND_DEFAULTS = ['#000000', '#ffffff', '#0e0e0e', '#0085ff', '#fff8ea'];
const FOREGROUND_DEFAULTS = ['#000000', '#ffffff', '#0e0e0e', '#0085ff', '#fff8ea'];
const QR_DEFAULT = 'https://www.decent-dao.org/';

export function QRCodeGenerator() {
  const [encoded, setEncoded] = useState(QR_DEFAULT);
  const [bg, setBg] = useState('#ffffff');
  const [fg, setFg] = useState('#000000');
  const [image, setImage] = useState('');

  return (
    <VStack spacing='2rem'> 
      <QRImage
        value={encoded}
        bgColor={bg}
        fgColor={fg}
        logoImage={image}
      />
      <LabeledInput 
        title='Encoded Text'
        placeholder={QR_DEFAULT}
        onChangeInput={(text) => {
          setEncoded(text ? text : QR_DEFAULT);
        }}
      />
      <ColorPicker 
        title='Background Color'
        colors={BACKGROUND_DEFAULTS}
        onChangeColor={(hex) => {
          setBg(hex);
        }} 
      />
      <ColorPicker 
        title='Foreground Color'
        colors={FOREGROUND_DEFAULTS}
        onChangeColor={(hex) => {
          setFg(hex);
        }} 
      />
      <Flex w='100%'>
        <Image cursor='pointer' onClick={() => {setImage(IMG_DECENT)}} w={BUTTON_SIZE} src={IMG_DECENT} />
        <Spacer />
        <Image cursor='pointer' onClick={() => {setImage(IMG_FRACTAL)}} w={BUTTON_SIZE} src={IMG_FRACTAL} />
        <Spacer />
        <Image cursor='pointer' onClick={() => {setImage(IMG_SARCO)}} w={BUTTON_SIZE} src={IMG_SARCO} />
        <Spacer />
        <Uploader 
          onChangeImage={(image: string) => {
            setImage(image);
          }} 
        />
        <Spacer />
        <Button 
          onClick={() => {setImage('')}}
          w={BUTTON_SIZE} 
          h={BUTTON_SIZE}>
            <Image w={BUTTON_SIZE/2} src={ICON_DELETE}/>
        </Button>
      </Flex>
    </VStack>
  );
}
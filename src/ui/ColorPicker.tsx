import { Box, FormLabel, HTMLChakraProps } from "@chakra-ui/react";
import { useState } from "react";
import { TwitterPicker } from "react-color";

type ColorPickerChangeListener = { onChange(hex: string): void }["onChange"];

interface Props extends Partial<HTMLChakraProps<"div">> {
  title: string;
  colors: string[];
  onChangeColor: ColorPickerChangeListener;
}

export function ColorPicker({ title, colors, onChangeColor, ...rest }: Props) {
  const [color, setColor] = useState(colors[0]);
  return (
    <Box w='100%' {...rest}>
      <FormLabel>{title}</FormLabel>
      <TwitterPicker
        triangle='hide'
        color={color} 
        colors={colors}
        onChange={(color) => {
            setColor(color.hex);
            onChangeColor(color.hex);
        }}
        width='100%'/>
    </Box>
  )
}
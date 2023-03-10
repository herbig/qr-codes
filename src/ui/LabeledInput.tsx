import { Box, FormLabel, HTMLChakraProps, Input } from "@chakra-ui/react";

type UrlInputChangeListener = { onChange(text: string): void }["onChange"];

interface Props extends Partial<HTMLChakraProps<"div">> {
  title: string;
  onChangeInput: UrlInputChangeListener;
}

export function LabeledInput({ title, onChangeInput, ...rest }: Props) {
  return (
    <Box w={'100%'} {...rest}>
      <FormLabel>{title}</FormLabel>
      <Input  
        placeholder={rest.placeholder}
        onChange={(event) => {
          onChangeInput(event.target.value);
        }}/>
    </Box>
  )
}
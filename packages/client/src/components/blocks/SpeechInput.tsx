import React from 'react';
import * as SR from 'react-speech-recognition';
import { Button } from './Button';
import { Input } from './Input';

type SpeechInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  HTMLInputElement;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  hideLabel?: boolean;
  lang: Languages;
}

const { SpeechRecognition, useSpeechRecognition } = SR;
// const useSpeechRecognition = SR.useSpeechRecognition;
// const SpeechRecognition = SR.SpeechRecognition;

export const SpeechInput = React.forwardRef<SpeechInputProps, Props>(
  function speechInput(
    { name, label, lang, hideLabel = false, ...rest },
    passedRef,
  ) {
    // const {
    //   transcript,
    //   interimTranscript,
    //   finalTranscript,
    //   resetTranscript,
    //   listening,
    // } = useSpeechRecognition();
    // console.log({
    //   transcript,
    //   interimTranscript,
    //   finalTranscript,
    //   resetTranscript,
    //   listening,
    // });
    // const startListening = () => {
    //   new SpeechRecognition().startListening({ language: lang });
    // };

    return (
      <div className="flex">
        <Input {...rest} name={name} label={label} hideLabel ref={passedRef} />
        <Button buttonStyle="secondary">Rec</Button>
      </div>
    );
  },
);

import { Button, Group, SimpleGrid, Textarea, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import emailjs from 'emailjs-com';
import { useState } from 'react';

interface GetInTouchSimpleProps {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}

export function GetInTouchSimple({ onClose }: GetInTouchSimpleProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
    };
    emailjs.send('service_ozt78yq', 'template_oqdc3rg', templateParams, 'H7zIxPY_AjtsJtkru')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);

      // Close the modal immediately
      onClose(); 

      // Delay the scroll to top action
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to top after a delay
      }, 500);  // Adjust the delay as needed (500ms in this example)
    }, (error) => {
      console.log('FAILED...', error);
    });
};


  return (
    <form onSubmit={handleSubmit}>
          <Title
        order={2}
        size="h1"
        style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
        fw={900}
        ta="center"
      >
        We're here to help!
      </Title>
      <TextInput
        label="Name"
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
        required
      />
      <TextInput
        label="Email"
        placeholder="Your email"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
        required
      />
       <TextInput
            label="Phone"
            placeholder="Your phone number"
            value={phone}
            onChange={(event) => setPhone(event.currentTarget.value)}
            required
          />
      <Textarea
        label="Message"
        placeholder="Your message"
        value={message}
        onChange={(event) => setMessage(event.currentTarget.value)}
        required
      />
      
      <Group align="right" mt="md">
        <Button type="submit"
        fullWidth
        variant="gradient"
        gradient={{ from: 'violet', to: 'cyan' }}
        >Send Message</Button>
      </Group>
    </form>
  );
}

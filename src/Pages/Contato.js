import { Button, Card, Container, Form, React } from 'react-bootstrap';
//import { useState } from 'react';

export default function Contato(props) {

  /*const [dadosForm, setDadosForm] = useState({
    nome: '',
    mensagem: ''
  });
  function handleChange(evento) {
    dadosForm[evento.target.name] = evento.target.value;
    console.log(dadosForm);
  }
  const enviarmensagem = async () => {

    const url = "http://localhost:8000/mensagem";
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dadosForm)
    });

*/
  return (

    <Container >
      <Form  >
        <Form.Group >
          <Form.Label><h3>Nome:</h3></Form.Label>
          <Form.Control type="nome" name="nome"
          placeholder="Coloque seu Nome: (Pagina em Construção, formulario não funciona)" />
        </Form.Group>

        <Form.Group >
          <Form.Label><h3>Coloque sua mensagem:</h3></Form.Label>
          <Form.Control as="textarea" name="mensagem"  
          rows={7} placeholder="Aguardamos por sua msg.....(Pagina em Construção , formulario não funciona) " />
        </Form.Group>
        
        <Button variant="outline-success" type="submit" block>
          Enviar
        </Button>
      </Form>
    </Container>


  )
}
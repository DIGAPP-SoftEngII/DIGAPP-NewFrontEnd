import React, { useState } from "react";

// Core
import { uploadFile } from "../../../Services/firebase";
import { setEstablishment } from "../../../Services/Api";

// Universal Cookies
import Cookies from "universal-cookie";

// reactstrap
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";
import { gql, useMutation } from "@apollo/client";

function CEModal({ modal, toggle }) {
  // Universal Cookies
  const cookies = new Cookies();

  // MakeAnEstablishmemnt
  const [name, setName] = useState("");
  const [opening, setOpening] = useState("");
  const [closing, setClosing] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [capacity, setCapacity] = useState("");
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("");
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "opening") {
      setOpening(e.target.value);
    } else if (e.target.name === "closing") {
      setClosing(e.target.value);
    } else if (e.target.name === "type") {
      if (e.target.value != "--") {
        if (e.target.value === "Café") {
          setType("Cafe");
        } else if (e.target.value === "Coworking") {
          setType("Corworking");
        }
      } else {
        alert("Ingrese un valor valido");
      }
    } else if (e.target.name === "address") {
      setAddress(e.target.value);
    } else if (e.target.name === "capacity") {
      setCapacity(e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    } else if (e.target.name === "city") {
      if (e.target.value != "--") {
        if (e.target.value === "Bogotá") {
          setCity(1);
        } else if (e.target.value === "Medellin") {
          setCity(2);
        } else if (e.target.value === "Barranquilla") {
          setCity(3);
        } else if (e.target.value === "Cali") {
          setCity(4);
        }
      } else {
        alert("Ingrese un valor valido");
      }
    }
  };



  const addEstablishment = gql`
    mutation(
      $userId: String!, 
      $establishmentName: String!, 
      $opening: String!, 
      $closing: String!, 
      $establishmentType: String!, 
      $capacity: Int!, 
      $description: String!, 
      $menu: String!, 
      $coverPicture: String!, 
      $location: String!, 
      $city: Int!){
      addEstablishment(
        userID: $userId, 
        establishmentName: $establishmentName, 
        opening: $opening, 
        closing: $closing, 
        establishmentType: $establishmentType, 
        capacity: $capacity, 
        description: $description, 
        menu: $menu, 
        coverPicture: $coverPicture, 
        location: $location, city: $city) {
          id
        }
    }
  
  `

  

  const [ createEstablishment, {data} ] = useMutation(addEstablishment)


  const handleSubmit = async () => {
    //const image = await uploadFile(file);

    const est = {
      userId: parseInt(cookies.get("id")),
      establishmentName: name,
      opening: opening,
      closing: closing,
      establishmentType: type,
      capacity: capacity,
      description: desc,
      menu: "Menu Test Web",
      coverPicture: "https://firebasestorage.googleapis.com/v0/b/digapp-b8984.appspot.com/o/c8f79870-6731-4322-910b-bdff9b8183f9?alt=media&token=2d998ba0-83ac-41b8-bf78-ae9397edb74f",
      location: address,
      city: city,
    };
    

    createEstablishment({variables: est})
    console.log(data)


    //setEstablishment();
  };

  return (
    <>
      <main>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader>Datos Del Establecimiento</ModalHeader>
          <ModalBody>
            <Container>
              <InputGroup>
                <InputGroupText>Nombre</InputGroupText>
                <Input type="text" name="name" onChange={handleChange} />
              </InputGroup>
              <InputGroup>
                <InputGroupText>Hora de apertura</InputGroupText>
                <Input type="time" name="opening" onChange={handleChange} />
              </InputGroup>
              <InputGroup>
                <InputGroupText>Hora de cierre</InputGroupText>
                <Input type="time" name="closing" onChange={handleChange} />
              </InputGroup>
              <InputGroup>
                <InputGroupText>Tipo de establecimiento</InputGroupText>
                <Input type="select" name="type" onChange={handleChange}>
                  <option>--</option>
                  <option>Coworking</option>
                  <option>Café</option>
                </Input>
              </InputGroup>
              <InputGroup>
                <InputGroupText>Direccion</InputGroupText>
                <Input type="text" name="address" onChange={handleChange} />
              </InputGroup>
              <InputGroup>
                <InputGroupText>Capacidad de personas</InputGroupText>
                <Input type="number" name="capacity" onChange={handleChange} />
              </InputGroup>
              <InputGroup>
                <InputGroupText>Descripcion del Local</InputGroupText>
                <Input type="textarea" name="desc" onChange={handleChange} />
              </InputGroup>
              <InputGroup>
                <InputGroupText>Ciudad</InputGroupText>
                <Input type="select" name="city" onChange={handleChange}>
                  <option>--</option>
                  <option>Bogotá</option>
                  <option>Medellin</option>
                  <option>Barranquilla</option>
                  <option>Cali</option>
                </Input>
              </InputGroup>
              <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                handleSubmit();
                toggle();
              }}
            >
              Subir
            </Button>
          </ModalFooter>
        </Modal>
      </main>
    </>
  );
}

export default CEModal;

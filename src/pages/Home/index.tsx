import React, {useEffect, useState} from 'react';
import {Divider, Checkbox, Text} from 'react-native-paper';
import {
  Container,
  Card,
  DropDown,
  TextCard,
  TextTopo,
  ButtonAge,
  TextTitulo,
  TextTituloR,
} from './style';
import listJson from '../../utils/vacinas.json';
import {Button, ScrollView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {differenceInMonths, differenceInYears} from 'date-fns';

const Home: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [ageMonths, setAgeMonths] = useState(0);
  const [age, setAge] = useState(0);

  useEffect(() => {
    setAge(differenceInYears(new Date(), date));
    setAgeMonths(differenceInMonths(new Date(), date));
  }, [date, ageMonths, age]);

  console.log(ageMonths);
  return (
    <Container>
      {checked ? (
        <TextTitulo>Parabéns - 100% Vacinado</TextTitulo>
      ) : (
        <TextTituloR>Você precisa se vacinar</TextTituloR>
      )}
      <ButtonAge onPress={() => setOpen(true)}>
        <Text> Data de Nascimento</Text>
      </ButtonAge>
      <DatePicker
        mode="date"
        modal
        open={open}
        date={date}
        // eslint-disable-next-line @typescript-eslint/no-shadow
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <TextTopo>
        Sua Idade - {age} anos / {ageMonths} messes
      </TextTopo>

      <TextTopo>Vacinas Elegivéis</TextTopo>
      <ScrollView >
        {listJson.map(vacina => {
          if (vacina.aplicacao <= ageMonths) {
            return (
              <>
                <Card>
                  <TextCard>{vacina.vacina} </TextCard>
                  <DropDown>
                    <Checkbox
                      color="black"
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                  </DropDown>
                </Card>
                <Divider />
              </>
            );
          }
        })}
      </ScrollView>
    </Container>
  );
};

export default Home;

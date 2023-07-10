// React
import { useEffect, useState } from 'react';

// Styles
import * as S from './Home.styles';

import { DataGraficos, DataItemCardsApi, DataItemCardsHome, TypeDateGrafico, TypeTabGrafico } from 'models';

import { getGraficoNovos, getHome } from 'services/api';

// Components
import { Cards } from 'components/cards';
import { Charts } from 'components/charts';
import queryString from 'query-string';

const HomeScreen = () => {
  const [cardsData, setCardsData] = useState({} as DataItemCardsApi);
  const [graficoNovos, setGraficoNovos] = useState<DataGraficos>({} as DataGraficos);

  const fetchData = async () => {
    const { data }: any = await getHome();
    setCardsData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderCards = (data: DataItemCardsApi) => {
    return Object.entries(data).map(([key, value], index) => {
      const capitalizedKey = capitalizeFirstLetter(key);
      return (
        <Cards key={index} name={capitalizedKey} data={'7'} value={value.quantity} porcentage={value.porcentage} />
      );
    });
  };
  // inicio=2023-01-10T00%3A24%3A55.974Z&final=2023-07-10T00%3A24%3A55.974Z&type=1&tab=1
  // inicio=2023-07-10T00%3A24%3A55.974Z&final=2023-01-10T00%3A24%3A55.974Z&tab=1&type=1
  return (
    <S.Container>
      <S.Content>
        {/* {cardsData.length > 0 &&
          cardsData.map((props, index) => (
            <Cards key={index} name={props.name} data={props.data} value={props.value} income={props.income} />
          ))} */}
        {renderCards(cardsData)}
      </S.Content>

      <S.ContentCharts>
        <Charts.NewChart />
        {/* <Charts.ActivesChart data={data} labels={labels} />
        <Charts.RatiosChart data={data} labels={labels} />
        <Charts.RetentionChart data={data} labels={labels} /> */}
      </S.ContentCharts>
    </S.Container>
  );
};

export default HomeScreen;

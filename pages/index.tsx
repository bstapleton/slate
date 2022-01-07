import type {NextPage} from 'next'
import {Fragment} from 'react';
import Head from 'next/head'
import Card, {CardContent, CardFooter, CardHeader} from "../components/Card";
import Chip, {ChipList} from "../components/Chip";
import Button from '../components/Button';
import {Icon} from "../components/Icon";
import {Scales} from "../data/scales";
import {Colors} from "../data/colors";
import {Icons} from "../data/icons";

const Home: NextPage = () => {
  return (
    <Fragment>
      <div className={'page'} data-theme={'dark'}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={'wrapper'}>
          <main>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <Card
                color={Colors.Primary}
                flex={true}
            >
              <CardHeader heading={'Hello there'} />
              <CardContent>
                Card content goes here
                <div>
                  <Button color={Colors.Indigo} iconType={Icons.HorizontalOne}>Indigo button</Button>
                  <Button color={Colors.Green} iconType={Icons.Tick}>Green button</Button>
                  <Button color={Colors.Green} disabled>Disabled button</Button>
                </div>
                <ChipList>
                  <Chip color={Colors.Tertiary} solid>Chippy</Chip>
                  <Chip color={Colors.Secondary} solid>Chippy</Chip>
                  <Chip color={Colors.Primary}>Chippy</Chip>
                </ChipList>
                <Icon type={Icons.ArrowDownDouble} />
                <Icon color={Colors.Orange} type={Icons.ArrowDownSingle} />
                <Icon color={Colors.Orange} type={Icons.ArrowLeftDouble} />
                <Icon color={Colors.Orange} type={Icons.ArrowLeftSingle} />
                <Icon color={Colors.Orange} type={Icons.ArrowRightDouble} />
                <Icon color={Colors.Orange} type={Icons.ArrowRightSingle} />
                <Icon color={Colors.Orange} type={Icons.ArrowUpDouble} />
                <Icon color={Colors.Orange} type={Icons.ArrowUpSingle} />
                <Icon color={Colors.Orange} type={Icons.Asterisk} />
                <Icon color={Colors.Orange} type={Icons.Bank} />
                <Icon color={Colors.Orange} type={Icons.Bell} />
                <Icon color={Colors.Orange} type={Icons.Briefcase} />
                <Icon color={Colors.Orange} type={Icons.Chart} />
                <Icon color={Colors.Orange} type={Icons.Clock} />
                <Icon color={Colors.Orange} type={Icons.Cogs} />
                <Icon color={Colors.Orange} type={Icons.Company} />
                <Icon color={Colors.Orange} type={Icons.Document} />
                <Icon color={Colors.Orange} type={Icons.DocumentSearch} size={Scales.Larger} />
                <Icon color={Colors.Orange} type={Icons.Documents} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Exit} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Email} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Envelope} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Exclamation} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.FaceHappy} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.FaceUnhappy} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Grid} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.HorizontalOne} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.HorizontalTwo} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.HorizontalThree} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.House} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Identity} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Info} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.List} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Lock} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Logout} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Money} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Person} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Phone} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.PipOne} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.PipTwo} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.PipThree} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Plus} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Post} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Question} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Renew} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Report} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Restart} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Search} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Sms} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.StarFull} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.StarHalf} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Tick} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Timer} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.Times} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.VerticalOne} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.VerticalTwo} size={Scales.Large} />
                <Icon color={Colors.Orange} type={Icons.VerticalThree} size={Scales.Large} />
              </CardContent>
              <CardFooter>Footer go brrr</CardFooter>
            </Card>

            {/*<Table*/}
            {/*    headings={['Test', 'Moose', 'Geese too']}*/}
            {/*    data={d}*/}
            {/*/>*/}
          </main>
        </div>
      </div>
    </Fragment>
  )
}

const d = [
  [ 'one', 'two', 'three' ],
  [ 'nine', 'nine', 'six' ],
  [ 'four', 'seven', 'eight' ],
]


export default Home

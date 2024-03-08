import type {NextPage} from 'next'
import {Fragment} from 'react';
import Head from 'next/head'
import Card from '../components/Card';
import ColorCard from '../components/ColorCard';
import Callout, {CalloutContent, CalloutFooter, CalloutHeader} from "../components/Callout";
import Button from '../components/Button';
import {Icon} from "../components/Icon";
import {Scales} from "../data/scales";
import {Colors} from "../data/colors";
import {Icons} from "../data/icons";
import Pip from '../components/Pip';
import Tile from "../components/Tile";
import GridItem, {GridContainer} from '../components/layout/Grid'
import Field from "../components/Field";
import {Fields} from "../data/fields";

const Home: NextPage = () => {
  return (
    <Fragment>
      <div className={'page'} data-theme={'dark'}>
        <Head>
          <title>Slate examples</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <div className={'wrapper'}>
          <main>
            <h1>Headings</h1>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <hr/>
            <h1>Colours</h1>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Primary}/>
              <code>Colors.Primary</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Secondary}/>
              <code>Colors.Secondary</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Tertiary}/>
              <code>Colors.Tertiary</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Black}/>
              <code>Colors.Black</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.White}/>
              <code>Colors.White</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Orange}/>
              <code>Colors.Orange</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Yellow}/>
              <code>Colors.Yellow</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Green}/>
              <code>Colors.Green</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Teal}/>
              <code>Colors.Teal</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Cyan}/>
              <code>Colors.Cyan</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Blue}/>
              <code>Colors.Blue</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Indigo}/>
              <code>Colors.Indigo</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Purple}/>
              <code>Colors.Purple</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Pink}/>
              <code>Colors.Pink</code>
            </div>
            <div className={'flex items-centre'}>
              <Pip color={Colors.Red}/>
              <code>Colors.Red</code>
            </div>
            <hr/>
            <h1>Cards</h1>
            <ColorCard color={Colors.Green} />
            <h1>Callouts</h1>
            <Callout color={Colors.Primary}>
              <CalloutContent>
                <p>This is a basic card display, without a header or footer</p>
              </CalloutContent>
            </Callout>
            <Callout color={Colors.Secondary}>
              <CalloutHeader heading={'With a header'} />
              <CalloutContent>
                <p>This card has a header</p>
              </CalloutContent>
            </Callout>
            <Callout color={Colors.Tertiary}>
              <CalloutContent>
                <p>This card has a footer</p>
              </CalloutContent>
              <CalloutFooter>
                <p>Hi there, I am a footer</p>
              </CalloutFooter>
            </Callout>
            <Callout color={Colors.Orange}>
              <CalloutHeader heading={'With both'} />
              <CalloutContent>
                <p>This one has both</p>
              </CalloutContent>
              <CalloutFooter>
                <p>Why, hello there~</p>
              </CalloutFooter>
            </Callout>
            <hr />
            <h1>Tiles</h1>
            <p>The Tile is the simplest form of content container. It has one optional prop, which can be used to override its background colour.</p>
            <GridContainer>
              <GridItem span={3}>
                <Tile>A</Tile>
              </GridItem>
              <GridItem span={4}>
                <Tile color={Colors.Purple}>B</Tile>
              </GridItem>
              <GridItem span={4}>
                <Tile color={Colors.Purple}>C</Tile>
              </GridItem>
            </GridContainer>
            <hr />
            <h1>Icons</h1>
            <p>Icons take any of the defined list of colours. Additionally, they can be scaled with the size prop. Some icons are duotone.</p>
            <GridContainer>
              <Tile align={'center'}>
                ArrowDownDouble
                <Icon type={Icons.ArrowDownDouble}/>
              </Tile>
              <Tile align={'center'}>
                ArrowDownSingle
                <Icon color={Colors.Orange} type={Icons.ArrowDownSingle}/>
              </Tile>
              <Tile align={'center'}>
                ArrowLeftDouble
                <Icon color={Colors.Orange} type={Icons.ArrowLeftDouble}/>
              </Tile>
              <Tile align={'center'}>
                ArrowLeftSingle
                <Icon color={Colors.Orange} type={Icons.ArrowLeftSingle}/>
              </Tile>
              <Tile align={'center'}>
                ArrowRightDouble
                <Icon color={Colors.Orange} type={Icons.ArrowRightDouble}/>
              </Tile>
              <Tile align={'center'}>
                ArrowRightSingle
                <Icon color={Colors.Orange} type={Icons.ArrowRightSingle}/>
              </Tile>
              <Tile align={'center'}>
                ArrowUpDouble
                <Icon color={Colors.Orange} type={Icons.ArrowUpDouble}/>
              </Tile>
              <Tile align={'center'}>
                ArrowUpSingle
                <Icon color={Colors.Orange} type={Icons.ArrowUpSingle}/>
              </Tile>
              <Tile align={'center'}>
                Asterisk
                <Icon color={Colors.Orange} type={Icons.Asterisk}/>
              </Tile>
              <Tile align={'center'}>
                Bank
                <Icon color={Colors.Orange} type={Icons.Bank}/>
              </Tile>
              <Tile align={'center'}>
                Bell
                <Icon color={Colors.Orange} type={Icons.Bell}/>
              </Tile>
              <Tile align={'center'}>
                Briefcase
                <Icon color={Colors.Orange} type={Icons.Briefcase}/>
              </Tile>
              <Tile align={'center'}>
                Chart
                <Icon color={Colors.Orange} type={Icons.Chart}/>
              </Tile>
              <Tile align={'center'}>
                Clock
                <Icon color={Colors.Orange} type={Icons.Clock}/>
              </Tile>
              <Tile align={'center'}>
                Cogs, Gears
                <Icon color={Colors.Orange} type={Icons.Cogs}/>
              </Tile>
              <Tile align={'center'}>
                Company, Business
                <Icon color={Colors.Orange} type={Icons.Company}/>
              </Tile>
              <Tile align={'center'}>
                Document
                <Icon color={Colors.Orange} type={Icons.Document}/>
              </Tile>
              <Tile align={'center'}>
                DocumentSearch
                <Icon color={Colors.Purple} type={Icons.DocumentSearch} size={Scales.Larger}/>
              </Tile>
              <Tile align={'center'}>
                Documents
                <Icon color={Colors.Orange} type={Icons.Documents} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Edit
                <Icon color={Colors.Orange} type={Icons.Edit} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Email
                <Icon color={Colors.Orange} type={Icons.Email} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Envelope
                <Icon color={Colors.Orange} type={Icons.Envelope} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Exclamation
                <Icon color={Colors.Orange} type={Icons.Exclamation} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                FaceHappy
                <Icon color={Colors.Orange} type={Icons.FaceHappy} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                FaceUnhappy
                <Icon color={Colors.Orange} type={Icons.FaceUnhappy} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Grid
                <Icon color={Colors.Orange} type={Icons.Grid} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                HorizontalOne
                <Icon color={Colors.Orange} type={Icons.HorizontalOne} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                HorizontalTwo, Equals
                <Icon color={Colors.Orange} type={Icons.HorizontalTwo} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                HorizontalThree
                <Icon color={Colors.Orange} type={Icons.HorizontalThree} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                House
                <Icon color={Colors.Orange} type={Icons.House} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Identity
                <Icon color={Colors.Orange} type={Icons.Identity} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Info
                <Icon color={Colors.Orange} type={Icons.Info} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                List
                <Icon color={Colors.Orange} type={Icons.List} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Lock
                <Icon color={Colors.Orange} type={Icons.Lock} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Logout, Exit
                <Icon color={Colors.Orange} type={Icons.Logout} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Money
                <Icon color={Colors.Orange} type={Icons.Money} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Person
                <Icon color={Colors.Orange} type={Icons.Person} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Phone
                <Icon color={Colors.Orange} type={Icons.Phone} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                PipOne
                <Icon color={Colors.Orange} type={Icons.PipOne} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                PipTwo
                <Icon color={Colors.Orange} type={Icons.PipTwo} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                PipThree
                <Icon color={Colors.Orange} type={Icons.PipThree} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Plus
                <Icon color={Colors.Orange} type={Icons.Plus} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Post, Letter
                <Icon color={Colors.Orange} type={Icons.Post} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Question
                <Icon color={Colors.Orange} type={Icons.Question} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Renew
                <Icon color={Colors.Orange} type={Icons.Renew} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Report
                <Icon color={Colors.Orange} type={Icons.Report} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Restart
                <Icon color={Colors.Orange} type={Icons.Restart} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Search
                <Icon color={Colors.Orange} type={Icons.Search} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Sms
                <Icon color={Colors.Orange} type={Icons.Sms} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                StarFull
                <Icon color={Colors.Orange} type={Icons.StarFull} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                StarHalf
                <Icon color={Colors.Orange} type={Icons.StarHalf} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Tick, Check
                <Icon color={Colors.Orange} type={Icons.Tick} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Timer
                <Icon color={Colors.Orange} type={Icons.Timer} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                Times
                <Icon color={Colors.Orange} type={Icons.Times} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                VerticalOne, Standby
                <Icon color={Colors.Orange} type={Icons.VerticalOne} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                VerticalTwo, Pause
                <Icon color={Colors.Orange} type={Icons.VerticalTwo} size={Scales.Large}/>
              </Tile>
              <Tile align={'center'}>
                VerticalThree
                <Icon color={Colors.Orange} type={Icons.VerticalThree} size={Scales.Large}/>
              </Tile>
            </GridContainer>
            <hr />
            <h1>Buttons</h1>
            <p>Buttons can have any of the viable colours from the defined list, they also have an optional boolean prop to disable them, and they can optionally take an icon.</p>
            <Button color={Colors.Primary}>Click me</Button>
            <Button color={Colors.Indigo} iconType={Icons.HorizontalOne}>Indigo button</Button>
            <Button color={Colors.Magenta} iconType={Icons.Tick}>Green button</Button>
            <Button color={Colors.Green} disabled>Disabled button</Button>

            <div className="field field--typeText field--outlined required" id="PhoneDay-wrapper">
              <div className="field__content field__content--outlined">
                <div className="field__prefix" />
                <div className="field__main field__main--outlined">
                  <label className="field__label field__label--outlined" htmlFor="PhoneDay">Referee telephone number</label>
                  <input className="field__input field__input--outlined phone-check" data-target="" id="PhoneDay" name="PhoneDay" type="text" />
                </div>
                <div className="field__affix">
                  <div className="field__validationIndicator" />
                </div>
              </div>
            </div>

            <Field type={Fields.Text} help={'I am a help text'} label={'Enter your name'} required={true} valid={false} />
            {/*<Card color={Colors.Primary}>*/}
            {/*  <CardHeader heading={'Hello there'}/>*/}
            {/*  <CardContent>*/}
            {/*    Card content goes here*/}
            {/*    <div>*/}

            {/*    </div>*/}
            {/*    <ChipList>*/}
            {/*      <Chip color={Colors.Tertiary} solid>Chippy</Chip>*/}
            {/*      <Chip color={Colors.Secondary} solid>Chippy</Chip>*/}
            {/*      <Chip color={Colors.Primary}>Chippy</Chip>*/}
            {/*    </ChipList>*/}
            {/*  </CardContent>*/}
            {/*  <CardFooter>Footer go brrr</CardFooter>*/}
            {/*</Card>*/}



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
  ['one', 'two', 'three'],
  ['nine', 'nine', 'six'],
  ['four', 'seven', 'eight'],
]


export default Home

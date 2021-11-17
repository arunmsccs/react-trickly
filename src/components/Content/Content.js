import React from 'react';
import Box from './Box/Box';
import Label from './Label/Label';
import Input from './Input/Input';
import Button from '../Button/Button';
import Bannerad from '../BannerAd/BannerAd';
import Search from '../Search/Search';
import NewsTile from '../NewsTile/NewsTile';
import Tags from '../Tags/Tags';
import './Content.css';

const content = (props) => (
    <section>
        <div className='FormSection'>
            <Box>
                <Label text='Recipe Title' />
                <Input placeholder='Recipe Name' width='92%'  />

                <Label text='What Food Like You Most (Choose Category)' />
                <select className='DropDown'>
                    <option>Breakfast</option>
                </select>

                <Label text='About Recipes' />
                <textarea className='TextArea'> Write Here</textarea>

                <Button text='Send Comments' width='50%' />

            </Box>

            <Box border='none'>
            <Label text='Upload Your Photos' />
            <div className='FlexBox'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>  
            </div>
            <Button text='Upload Photos' width='35%' bgcolor='#000000' />
            </Box>

            <Box>
                <Label text='Additional Informations:' />
                <div className='InputBox'>
                    <Input placeholder='Preparing Time' />
                    <Input placeholder='Cooking Time' />
                    <Input placeholder='Serving People' />
                    <Input placeholder='People Views' /> 
                </div>
            </Box>

            <Box>
                <Label text='Ingredients:' />
                <div className='InputBox'>
                    <Input placeholder='Preparing Time' />
                    <Input placeholder='Cooking Time' />
                    <Input placeholder='Serving People' />
                    <Input placeholder='People Views' /> 
                </div>
                <Button text='Add New Ingredient' bgcolor='#000000' />
            </Box>

            <Box>
                <Label text='Nutrition Facts:' />
                <div className='InputBox'>
                    <Input placeholder='Preparing Time' />
                    <Input placeholder='Cooking Time' />
                    <Input placeholder='Serving People' />
                    <Input placeholder='People Views' /> 
                </div>
                <Button text='Add New Ingredient' bgcolor='#000000' />
            </Box>

            <Box border='none' padding='0'>
            <Label text='Descriptions' />
            <textarea className='TextArea'> Write Here</textarea>
            <Button text='Send Message' bgcolor='#000000' />
            </Box>
        </div>
        
        <div className='SidebarSection'>
            <Search />
            <Bannerad />

            <Box>
                <Label text='Category' />
                <ul className='list'>
                    <li>&#8594; Breakfast</li>
                    <li>&#8594; Supper Lemon</li>
                    <li>&#8594; Fresh Pizza</li>
                    <li>&#8594; Yumme Juice</li>
                    <li>&#8594; Orange Juice</li>
                    <li>&#8594; Chiken Buger</li>
                    <li>&#8594; Beef Buger</li>
                    <li>&#8594; Moton Chipe</li>
                    <li>&#8594; Drinks</li>
                </ul>
            </Box>

            <Box>
                <Label text='Recent News' />
                <NewsTile title='Burger' />
                <NewsTile title='Pizza' />
                <NewsTile title='Potato' />
                <NewsTile title='Pasta' />      
            </Box>

            <Box>
                <Label text='Popular Tags' />
                <br /> <br />
                <Tags title='Food' />
                <Tags title='Pizza' />
                <Tags title='Burger' />
                <Tags title='Fast' /><br />
                <Tags title='Restaurant' />
                <Tags title='Chicken' /><br />
                <Tags title='Buger Cheken' />
                <Tags title='Moton' />
       
            </Box>
        </div>
        
    </section>
);

export default content;
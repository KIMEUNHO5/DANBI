import React, { Component } from 'react'
import {View, ImageBackground, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

class StampCalendar extends Component {
    render() {
       return (
        <View style={{ flex: 1 }}>
          <ImageBackground source = {require('../Source/calender_background.png')} style = {styles.backgroundimage}>
            <Calendar style={{marginBottom: 100, marginHorizontal: 20, borderRadius: 20,}}
            current={'2021-12-10'}
            minDate={'2021-01-01'}
            maxDate={'2021-12-31'}

            onDayPress={(day) => {console.log('selected day', day)}}
            onDayLongPress={(day) => {console.log('selected day', day)}}
            monthFormat={'yyyy MM'}
            onMonthChange={(month) => {console.log('month changed', month)}}

            hideArrows={true}
            renderArrow={(direction) => (<Arrow/>)}
            hideExtraDays={false}
            disableMonthChange={false}

            firstDay={7}
            hideDayNames={false}
            showWeekNumbers={false}

            onPressArrowLeft={subtractMonth => subtractMonth()}
            onPressArrowRight={addMonth => addMonth()}

            disableArrowLeft={false}
            disableArrowRight={false}
            disableAllTouchEventsForDisabledDays={true}

            enableSwipeMonths={true}

            markingType={'period'}
            markedDates={{
              '2021-11-02': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-11-03': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-11-06': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-11-08': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-11-09': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-11-10': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-11-13': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-11-14': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-11-20': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-11-24': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-11-15': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-11-26': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-12-05': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-12-07': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
              '2021-12-08': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true, textColor: 'black'},
            }}
            />
            
         </ImageBackground> 
      </View>
     )
  }
}

const styles = StyleSheet.create({
  backgroundimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});


  
  
  export default StampCalendar;
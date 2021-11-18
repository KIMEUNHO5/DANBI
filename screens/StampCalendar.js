import React, { Component } from 'react'
import {View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
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
        <View style={{ paddingTop: 50, flex: 1 }}>
            <Calendar
            current={'2021-11-17'}
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

            //renderHeader={(date) => {/*Return JSX*/}}

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
            }}
            />
        </View>
       )
     }
   }
  
  export default StampCalendar;
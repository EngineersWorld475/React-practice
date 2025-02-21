import React from 'react'
import Page from './components/Task1/Page'
import Travelspot from './components/Task2/Travelspot'
import LocationsPage from './components/Task2/LocationsPage'
import Parent from './components/Task3/propss/Parent'
import FormSub from './components/Task3/Controlled components/FormSub'
import List from './components/Task3/useCallback/List'
import Ucparent from './components/Task3/useCallback/Ucparent'
import MemParent from './components/Task3/React memo/MemParent'
import Title, { TitleHoverAnime } from './components/Task3/HOC/Title'
import Paragraph, { ParagraphAnime } from './components/Task3/HOC/Paragraph'
import SearchWithDebounce from './components/Task3/Debouncing/SearchWithDebounce'
import MainPage from './components/Chef claude/MainPage'
import Answers from './components/Ternary/Answers'
import ArrayState from './components/ComplexState/ArrayState'
import ObjectState from './components/ComplexState/ObjectState'
import BasicForm from './components/Forms/BasicForm'
import MainPageCounter from './components/Machine/MainPageCounter'
import Unread from './components/conditional rendering/Unread'
import PerfomanceOpt from './components/Perfomance optimization/PerfomanceOpt'



const App = () => {
  return (
    <>
     {/* <LocationsPage /> */}
     {/* <Parent />s */}
     {/* <FormSub /> */}
     {/* <List /> */}
     {/* <Ucparent /> */}
     {/* <MemParent /> */}
     {/* <TitleHoverAnime /> */}
     {/* <ParagraphAnime /> */}
     {/* <SearchWithDebounce /> */}
     {/* <MainPage /> */}
     {/* <Answers /> */}
     {/* <ArrayState /> */}
     {/* <ObjectState /> */}
     {/* <BasicForm /> */}
     {/* <MainPageCounter /> */}
     {/* <Unread /> */}
     <PerfomanceOpt />
    </>
  )
}

export default App

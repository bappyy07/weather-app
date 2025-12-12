import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState = {
  weatherData: [],
  loading: false,
  error: null
}

//fetch weather data from weather api
export const fetchWeatherData = createAsyncThunk("weater/fetchWeatherData", async (cityName) => {
  const apikey = "39d8feef92756dd5906c4b556a971e94"
  const respons = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apikey}`)
  const data = await respons.json()
  return data
})

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers:{
    clearWeatherData:(state)=>{
      state.weatherData = []
    }
  },
  extraReducers:(builder)=> {
    builder
    .addCase(fetchWeatherData.pending, (state)=>{
      state.loading  =true,
      state.error = null
    })
    .addCase(fetchWeatherData.fulfilled, (state, action)=>{
      state.loading = false,
      state.weatherData.push(action.payload)

    })
    .addCase(fetchWeatherData.rejected, (state,action)=>{
      state.loading=false,
      state.error= action.error.message
    })
  }
})

export const {clearWeatherData}= weatherSlice.actions
export default weatherSlice.reducer
import streamlit as st
import joblib

if st.button('Volver a proyectos'):
    
    js = f"window.open('https://juicibox.github.io/proyectos.html','_self')"
    html = '<img src onerror="{}">'.format(js)
    div = '<div style="display:none">{}</div>'.format(html)
    st.markdown(div, unsafe_allow_html=True)

modelo = joblib.load('model.joblib')


st.write("El modelo estima los precios de vivienda para la ciudad de Bogotá, Colombia")


estrato = st.slider("Estrato", 1, 6, 3)
area = st.slider("Área", 30, 380, 80)
habitacion = st.slider("Habitaciones", 1, 6, 2)
bano = st.slider("Baños", 1, 6, 1)
parqueadero = st.slider("Parqueaderos", 0,5,1 )

ok = st.button("Calcular Precio")
if ok:
  X = [[estrato, area, habitacion, bano, parqueadero]]
  precio = modelo.predict(X)
  st.subheader(f"El precio estimado de la vivienda es: {precio[0]} millones de pesos")

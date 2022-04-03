import { useEffect } from "react"
import { negociosAPI } from "../Api/negociosAPI"

export const useNegociosAPI = () => {
    const url = "https://tempapi.albertoteran.com/"
 
    const loadNegocios = async() => {
        const resp = await negociosAPI.get(url)
        console.log(resp.data[0].Horario.Domingo )
    }

    useEffect (() => {
        loadNegocios()
    })
}
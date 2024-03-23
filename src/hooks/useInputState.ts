import { ChangeEvent,useState } from "react"


const useInputState = (defaultValue: string) => {
          const [value, setValue] = useState(defaultValue);

          const onChange = (e: ChangeEvent<HTMLInputElement>) => {
                    setValue(e.target.value)
          }

          return {
                    value,
                    onChange
          }
}

export default useInputState
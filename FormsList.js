import React from 'react'
import { View } from 'react-native'
import Forms from './Forms'

function FormsList(props) {
  return (
    <View>
      {props.forms.map(p => {
        return (
          <Forms
            key={p.id}
            title={p.title}
            subtitle={p.subtitle}
            comment={p.comment}
          />
        )
      })}
    </View>
  )
}

export default FormsList
import React from 'react'
import { getComponentByName } from '../../utils/getComponentByName'

interface IRouteComponent {
  component: string,
  props?: Record<string, any>
}

function RouteComponent({component, props}:IRouteComponent) {
  const ComponentByName:React.ComponentType | null = getComponentByName(component)
  if(ComponentByName){
    return props ? <ComponentByName {...props}/> : <ComponentByName/>;
  }
  else
    return null;
}

export default RouteComponent
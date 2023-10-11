import Profile from "../pages/Profile/Profile";

const componentMap:Record<string, React.FC<any>> = {
  Profile
};

export function getComponentByName(componentName:string) {
  if (componentName && componentName in componentMap) {
    return componentMap[componentName];
  }
  return null;
}

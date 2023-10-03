import Profile from "../pages/Profile/Profile";
import Projects from "../pages/Projects/Projects";

const componentMap:Record<string, React.FC<any>> = {
  Profile,
  Projects
};

export function getComponentByName(componentName:string) {
  if (componentName && componentName in componentMap) {
    return componentMap[componentName];
  }
  return null;
}

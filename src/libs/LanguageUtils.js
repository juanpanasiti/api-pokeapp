const DEFAULT_LANG = 'en'
export const getVersion = (versions,itemName,lang) => {
  let selected_version = ''
  let default_version = ''

  for (const version of versions) {
    if(version.language.name === lang){
      selected_version = version[itemName]
      break
    }
    if(default_version.length === 0 && version.language.name === DEFAULT_LANG){
      default_version = version[itemName]
    }
  }//for-of

  return selected_version.length > 0 ? selected_version : default_version
}//getVersion()
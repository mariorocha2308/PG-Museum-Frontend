import { GET_ALL_GALLERY, GET_FIND_GALLERY, CATEGORIES, SORT_GALLERY } from '../types'

const initialState = {
  allGallery: []
}

export default function galleryReducer(state = initialState, action) {
  switch (action.type) {

    case GET_ALL_GALLERY:
      return {
        ...state,
        allGallery: action.payload
      }

    case GET_FIND_GALLERY:
      return {
        ...state,
        allGallery: action.payload
      }

    case CATEGORIES:
      const [data, category] = action.payload
      //console.log(action.payload)
      let artworks = data;
      artworks = artworks.filter(art => {
        // console.log(art)
        return art.types[0].type.toLowerCase().includes(category.toLowerCase())
      })
      return {
        ...state,
        allGallery: artworks
      }
    case SORT_GALLERY:
      //actualiza allGallery con su versión ordenada alfabeticamente
      return {
        ...state,
        allGallery: action.payload
      }
    default:
      return state;
  }
}
import store from '../../store/index.js'

function fillToplist(rating,firstName) {
    //const state= store.getState();
    return {rating, firstName};
}

  export default function getHotList() {
    const state = store.getState();
    let hottestList = []

    state.actors.actors.map(actor => {
        hottestList.push(fillToplist(actor.rating, actor.firstName))
        return null //Needs to return something
    })
    return hottestList
  }

export const hottestList = 3;

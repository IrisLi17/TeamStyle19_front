import { error } from "util";

const FILE_URL = 'api/files'
export default {
  name: 'fileSrv',
  loadFile (context) {
    console.log('loading')
    return context.$http({
      url: FILE_URL,
    }).then(response => {
      console.log('success')
      context.data.title = response.title
      context.data.intro = response.intro
      context.data.address = response.address
    }, response => {
      console.log('gg')
      context.title = 'faketitle'
      context.intro = 'fakeintro'
      context.address = 'fakeaddr.xx'
      context.files = [
        {
          id: 0,
          title: 'faketitle0',
          intro: 'fakeintro0',
          address: 'fakeaddr0.xx'
        },
        {
          id: 1,
          title: 'faketitle1',
          intro: 'fakeintro1',
          address: 'fakeaddr1.xx'
        }
      ]
    })
  }
}
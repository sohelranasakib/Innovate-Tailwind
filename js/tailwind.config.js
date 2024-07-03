tailwind.config = {
    theme: {
      extend: {
        // color start
        colors: {
          haderBg:'rgba(23, 13, 110, 0.8)',
          headerHover:'#1BBF00',
          bannerOverly:'rgba(107, 99, 197, 0.9)',
          bannerColorH1:'#FAFAFE',
          bannerColorP:'#E6E5F3',
          blackColor:'#141135',
          beforeColor:'#4F585F',
          whycolorP:'#726E9E',
          workBg:'#F6F5FF',
          workbuttoncolor:'#92c789',
          projectbg:'#F9F9FB',
          projectlogocolor:'#ECEDF0',
          projectimgbg:'rgba(157, 151, 218, 0.9)',
          finishedbg:'#48409C',
          finishedP:'#FEFEFE',
          project_bg:'#f6f6f8',
        },
        // color end

        // container start
        maxWidth: {
            'headerContainer': '1170px',
            'bannerContainer': '1170px',
          },
        // container end
        // font family
        fontFamily: {
            'openS': ['Open Sans', 'sans-serif'],
            'paprika': ['Paprika', 'sans-serif'],
            'nunito': ['Nunito', 'sans-serif'],
            
          },
        // fonts family
        // backround Images start
        backgroundImage: {
            'banner_bg':"url('images/banner_bg.png')",
            'service_bg':"url('images/serviceBg.png')",
            'why_bg':"url('images/whyBg.png')",
            'protfolio_bg':"url('images/protfoliobg.png')",
            'timebg':"url('images/timeBg.png')",
          }
        // backround Images end
      }
    }
  }
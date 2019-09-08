import { useState, useEffect, useRef } from 'react'
import _ from 'lodash'
import axios from 'axios'
import $ from 'jquery'

export const useScrolled = function (boundary) {
  const [scrolled, setScrolled] = useState(window.scrollY > boundary)
  useEffect(() => {
    const scrollListener = (e) => {
      setScrolled(window.scrollY > boundary)
    }
    const throttledScrollListener = _.throttle(scrollListener, 100, { leading: true, trailing: true})
    window.addEventListener('scroll', throttledScrollListener)
    return () => window.removeEventListener('scroll', throttledScrollListener)
  })
  return [scrolled, setScrolled]
}

export const useScroll = function (boundary) {
  const [scrollY, setScroll] = useState(window.scrollY)
  const [scrollDirection, setScrollDirection] = useState('none')
  useEffect(() => {
    const scrollListener = (e) => {
      window.scrollY > scrollY ? setScrollDirection('down') : setScrollDirection('up')
      setScroll(window.scrollY)
    }
    const throttledScrollListener = _.throttle(scrollListener, 100, { leading: true, trailing: true})
    window.addEventListener('scroll', throttledScrollListener)
    return () => window.removeEventListener('scroll', throttledScrollListener)
  })
  return [scrollY, scrollDirection]
}

export const useWindowWidth = function (smallPx) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [small, setSmall] = useState(window.innerWidth < smallPx)
  let windowWidthPx = `${windowWidth}px`
  useEffect(() => {
    const resizeListener = (e) => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth < smallPx && !small) {
        setSmall(true)
      } else if (window.innerWidth > smallPx && small) {
        setSmall(false)
      }
    }
    const throttledResizeListener = _.throttle(resizeListener, 100, { leading: true, trailing: true})
    window.addEventListener('resize', throttledResizeListener)
    return () => window.removeEventListener('resize', throttledResizeListener)
  }, [windowWidth])
  return [{windowWidth, windowWidthPx, small}, setWindowWidth]
}

export const useIntersection = function ({ elements, threshold}) {
  const [visible, setVisible] = useState([...Array(elements.length)].map(() => false))
  let observers = []
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, threshold]
    }
    const intersectionCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > observerOptions.threshold[1]) {
          visible[entry.target.id] = true
          setVisible([...visible])
        } else if (entry.intersectionRatio === observerOptions.threshold[0]) {
          visible[entry.target.id] = false
          setVisible([...visible])
        }
      })
    }
    elements.forEach(element => {
      if (element.current) {
        const observer = new IntersectionObserver(intersectionCallback, observerOptions)
        observer.observe(element.current)
        observers.push(observer)
      } else {
        const observer = new IntersectionObserver(intersectionCallback, observerOptions)
        observer.observe(element)
        observers.push(observer)
      }

    })
    return () => observers.forEach(observer => observer.disconnect())
  }, [])
  return [visible, setVisible]
}

export const useTwoElemIntersection = function({ elem1, elem2 }) {
  useEffect(() => {
  })
  //   var d1_offset             = $div1.offset();
  //   	var d1_height             = $div1.outerHeight( true );
  //   	var d1_width              = $div1.outerWidth( true );
  //   	var d1_distance_from_top  = d1_offset.top + d1_height;
  //   	var d1_distance_from_left = d1_offset.left + d1_width;
  //
  //   	// Div 2 data
  //   	var d2_offset             = $div2.offset();
  //   	var d2_height             = $div2.outerHeight( true );
  //   	var d2_width              = $div2.outerWidth( true );
  //   	var d2_distance_from_top  = d2_offset.top + d2_height;
  //   	var d2_distance_from_left = d2_offset.left + d2_width;
  //
  //   	var not_colliding = ( d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left );
  //
  //   	// Return whether it IS colliding
  //   	return ! not_colliding;
}

export const useSlide = function (imagesCount) {
  const [imgId, setImgId] = useState(-1)
  const [timerId, setTimerId] = useState('')

  const setSlide = (id) => {
    setImgId(id)
    clearInterval(timerId)
    setTimerId(setInterval(setSlide, 5000, (id + 1) % imagesCount))
  }
  useEffect(() => {
    if (!timerId) {
      setSlide((imgId + 1) % imagesCount)
    }
    return () => clearInterval(timerId)
  })
  return [imgId, setSlide]
}

export const useJustifiedGrid = function () {
  useEffect(() => {
    $('#gallery').justifiedGallery({ rowHeight: 250 })
  })
}

export const useWidth = function (ref) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(ref.current.offsetWidth)
  })
  return [width]
}

export const useElemProp = function ({ ref, propName }) {
  const [prop, setProp] = useState(0)
  useEffect(() => {
    setProp(ref.current[propName])
  })
  return [prop]
}
// export const useImages = function ({ url }) {
//   // const [ratios, setRatios] = useState([])
//   const [images, setImages] = useState([])
//   useEffect(() => {
//
//     const getImgUrls = ({ url, length}) => [...Array(length)].map((img, index) => {return { id: index, alt: 'Image', src: `http://localhost:3000/images/travels/${url}/${index + 1}.jpg` }})
//
//     async function fetchData () {
//       const getRatios = ({ url }) => axios({
//         method: 'get',
//         url: `http://localhost:3000/sizes/${url}`
//       })
//       const ratios = await getRatios({ url: 'soca'}
//       setRatios()
//     }
//
//     const ratios = await getRatios({ url: 'soca'})
//     const images = getImgUrls({ url: 'soca', length: ratios.data.length})
//     setImages(images)
//   })
//   return [images]
// }


// const fontSize = getComputedStyle(document.documentElement).fontSize
// const headerHeight = Number(fontSize.substring(0, fontSize.length - 2))

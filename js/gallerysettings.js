// lightGallery
function lightGalleryFun(galleryId) {
    lightGallery(document.getElementById(galleryId), {
        plugins: [lgFullscreen, lgThumbnail, lgZoom],
        thumbnail: true,
        speed: 500
    });
}

lightGalleryFun('gallery')
lightGalleryFun('gallery__wedding')
lightGalleryFun('gallery__portrait')
lightGalleryFun('gallery__family')



// justifiedGallery
function justifiedGalleryFun(rowHeight, galleryId) {
    $(galleryId).justifiedGallery({
        rowHeight : rowHeight,
        lastRow : 'nojustify',
        margins : 3
    });
}

justifiedGalleryFun(220, '#gallery')
justifiedGalleryFun(220, '#gallery__wedding')
justifiedGalleryFun(220, '#gallery__portrait')
justifiedGalleryFun(220, '#gallery__family')

if (window.matchMedia("(max-width: 703px)").matches) {
    justifiedGalleryFun(520, '#gallery')
    justifiedGalleryFun(520, '#gallery__wedding')
    justifiedGalleryFun(520, '#gallery__portrait')
    justifiedGalleryFun(520, '#gallery__family')
}
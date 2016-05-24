title: 不同移动设备中css3的media
date: 2016-04-24 14:29:22
tags:
---

    /* 
    device-pixel-ratio：定义输入设备屏幕的可视宽度与可见高度比率。
    device-width：输入设备屏幕的可视宽度。
    orientation ：屏幕横竖屏定向。landscape 是横向，portrait 是纵向【ipad 相反】
    */

    /* iPhone 4 ———– */
    
    @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min-device-pixel-ratio: 1.5) {
    /* Styles */
    }
    
    
    /* iPads (portrait) ———– */
    
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    /* Styles */
    }
    
    
    /* Smartphones (portrait and landscape) ———– */
    
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    /* Styles */
    }
    
    
    /* Smartphones (landscape) ———– */
    
    @media only screen and (min-width: 321px) {
    /* Styles */
    }
    
    
    /* Smartphones (portrait) ———– */
    
    @media only screen and (max-width: 320px) {
    /* Styles */
    }
    
    
    /* iPads (portrait and landscape) ———– */
    
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    /* Styles */
    }
    
    
    /* iPads (landscape) ———– */
    
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px)
    /* Smartphones (portrait and landscape) ———– */
    
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    /* Styles */
    }
    
    
    /* Smartphones (landscape) ———– */
    
    @media only screen and (min-width: 321px) {
    /* Styles */
    }
    
    
    /* Smartphones (portrait) ———– */
    
    @media only screen and (max-width: 320px) {
    /* Styles */
    }
    
    
    /* iPads (portrait and landscape) ———– */
    
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    /* Styles */
    }
    
    
    /* iPads (landscape) ———– */
    
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    /* Styles */
    }
    
    
    /* iPads (portrait) ———– */
    
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    /* Styles */
    }
    
    
    /* Desktops and laptops ———– */
    
    @media only screen and (min-width: 1224px) {
    /* Styles */
    }
    
    
    /* Large screens ———– */
    
    @media only screen and (min-width: 1824px) {
    /* Styles */
    }
    



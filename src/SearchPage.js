import { TuneOutlined } from '@material-ui/icons'
import React from 'react'
import ChannelRow from './ChannelRow'
import './Searchpage.css'
import VideoRow from './VideoRow'
function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage_filter">
                <TuneOutlined/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwniapyAQHeutpsdEAQOENjwxCuKykSS9gwIgsIhf6Q=s88-c-k-c0x00ffffff-no-rj"
            channel="Munawar Fariqui"
            verified
            subs="2M subscribers"
            noofvideos={341}
            description="Standups and more"
            />
            <hr/>
            <VideoRow
            views="1.4M"
            subs="12K"
            description="Get stuffs done"
            timestamp="59 second ago"
            channel="Ahmad Zaky"
            title="Get STUFFS Done"
            image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABO1BMVEWwABf///+yABiuABemAACpAACjAACfAAClAACsAAD//v+1ABicAACuABP7//+xABWuARr/+/+rABSXAACwAA6qGyz+//r/9vmfABCqAA2sABDgw8msAAb/9feyABGxAAD16+2RAADIkpqwT12sPUS+eoPRqa/pwsihABa7e4O5WmTy4eDFgYqmMT6oAB3o2Nruy9bx3OSkIDGuR0+lUk7+7PL4/vPKfXzix8SeDiGzOUW1Xl/KlpXFcHnktru+e3rXm6W9io/axr3IpaW4ZG2zRliXAB+qEibcsLG4aXqvLUDBdHy9Z2m5Ym7NhI23VVzYubSpaWudPEbxydayAC7Xl5m6QFOwenasVmLPnarAeInCWV/n0NrepqimGjHn5Nu2kZOcOEeWICp/AADf2diXX2ivNDbjrLb13trusPs0AAAOtElEQVR4nO2dC1fbuLbHvSW/HduK4jhxcIwJEAJ5keTQJpRHpoWGEh5t59ALPUA7nTkz/f6f4GwlobQdOmvuzF0Lzq1+dGU5iuNs/721tSXLqqJIJJIHBCGK4ju+Qgml9L6Neej4ROEKY6iZ7zKFS73+EJ/7CxktUXhGj12p1R9CefKPbLYRxb2NR4/n2X2b87ChClU3oJ/TTgAGEXMUXyEome9SwnxZK7+CUu3CS1tmHzomYyJ+cUK54zDmug65b+seGJRGm579pJbClu5ouhk5ShJbWo1rFm9Jz/oSSrnRhsqiDc3I3N7Z2TYUa/di19ocbrUU6Vm/w6x4lz+EnUw0BADvSlefwpyxCHbe9e/btIdHad9LU6iahzZUn3mQV/sTsQpSrDugURs8OLX2IK3lUm9ZnZNifROqViFMi3HD+xgtpFDRpVjfhsdHYM9pWgPqPIdiGVKsb+OXlmxomJYU60/gB5tZaKhSrD8DSZYK0NA+iZWZipWVYt1FsjTxrGWox3rqNYRYmX0p1t1MxQrWIH2OreFYQ7EWKlKsu5mK5Y7K0G57dkY7gHI7DKVYv4MyxiYB3krmxwXs7mxr6jZA5wWE+ZIvx5o/hziOw/ho7WizWKvpv+4uH+o+r22PR6PjI8InQ/SSGyh1/RKJLHU+CuYtU1etyApiS7U03GJMkUNatxA1Y4yavdPj5TH+LZ+cNE5Olndxe3x82mvmMxnrvi18KCSMm8craVqwbfg9drZQ3rgcZyhh0rsU0YMeel72LqVmeFlvJ+c7MsiLOjj2BN8WCyDEZpK5923pA4Cbl1DeSCfMaqIN5bR8Uw9tG3X06kYruW9LHwK1AuwZrVqrWMvNQTj1sPPMqvCnW7J5eTcRcZsAx4bZ4lzLvQxB+JYHp9rqV4H+tHTfhj4E4nMI57a2eNAbVurhLM6vGcvwZRRbtWRrqCjWsqhv2aLWgIk+2YlYE8/CZnCqGIatiia7iChWAzUKC0UUDdrHr8LCq702itXo9/Y7dhZWFg/HddRrqEuxFEUbghdOxfL6mZxXyGRWYC3ezBjWou1Vc5puGakNQ1OKhWJVsZbNPGtFNbIFPhGruXIUDVJ4bm3vHKrofFXtvg19CKBYWA/LNSHWnJ6xC1xHsbByrpvFdCNnXcKq+sSGqi4DvBBLBHEUa3UmVk2Ipb2FdaOYdjJRGypmLwtVQ4o1Fcv7tlhs6bQbL0qxpvyBZ/G0YzAjl8u99qRYE1RsDUWA10TMMgx7o2WgWOpMrExpZWNjo4wxy5KjDuhZZ9M861YscyrWj6Ia5kq/QLs658GVFEu5TUpnYmULNeFZmM+vZ2rYGmKAH+d6IZzJ1AGxXkH4WTVMh6rIs7Tj8oVaS+2cOSyvqUceNKRnIfEiimWHRdEb7BtRvtYSYqlsUIubBdjVa91IP/BgbMkxGkXxuxDaXnlgroKddjPN9X/mVuDc2N1dWKhiR2jbyNUqduj1AulZikKLqedls4/w1ct69bKdprb3KC1k07otStJ66hXssqFIsRB1x7PFYEzWDsMQs4gsePhPDCeLARp8i9p5fdnbEfilzbInhq7EeHtWjLh7YuAdhQsnI/C4iUIuRUx6lqIwau7XQQzTTEfdvZsbFfhWuJoYD0zXNJdIsQQ0Hoy3DuYuO51OPb2lvoEFncuVamXc0pgvb4UhGItcd95SdSTirdH19XUXyedHIx7phqGrmiV0ko51i3iGdTKzaCaKi3COJXK60d0QxJkhtu/bnofLjTj0ls+LJRKJRCKRSCQSiUQikUgk/1/53fiPHGq8ExbElCvUchXCXcIIYQ5RfIUpPiWUEd/1GfUd4lAiFaR8bS1SSpvbowQFIkThnLu+wtHZEvHishZnDmPUIfLGkqNfftRb82M4VFisqSonccB5FFBesojCfOPlgUopt4z5EqPf+2itk/uxrbfUbWgG1ptKdazXTsZ6tL2VifbP8koSLXY64zeavr1VaZrfvVjEWm/nSsb/QFfbszfacJCb69SMAvT0lXqNUvXELn8cZ/rQTsMnwXcvVqbvQRaydtNot4u5H+B0DRb3IFupFc5MwhKrfZnRzmE587x+WeT3be09Q80f0/F4+xl0BxtDM7iGca5+8dvlVv3c3oywVcy0Lw31BEaBVu3UnPu29p7xM+ttNdLH0J141lvvX3q1YzdeF1AkSnyi9i8z5hp6Vq29bnzvE+kmrSHD1rCp7mU7K/BSi3s2DPQ6jHWRq5oHduetsQJzqbf23T+Rxvl4HNFgaWvkar2LqzFmWVFjHMV7lZFYRpbwbuWqF2WWq5Ulq/a9exZjUUy4wmNK/ZKmRpi/EzOmJFEZwSLmuJpWIszStIDKGTyTTgwRE09u0ijq+5+mplAy3ZzucG82SiQSiUQi+TM4YsBykjaLdns6+Y8o0/mlsymBWOxT4t7VrH81DZUxJXHFq0I/LYh3O5+Q+75LZ+nBp48xcXDIzZjzZ6mDsGtSwsU+rktmNn72258bQBRG/2C+J+Zv/xc9dO7HeHrkszHyyW/OLLmZUJkkDr1rpShKvxhbTwjDPDNJGHXukNYRK7/5swyLipQLMywaW7EYLr3Z/eZwzGXccRzfwbyVJZrFEjaz7isLpi/Etyz3Zhk+xtjXHQFXU4VarmX9jcVjfC0zaOmxsBFNu7V28qs3l4oqRS1qOf5nRTfn/8Vbf1TjgVsbDNBe4pAv5VeUUg0ZDAYOn5RML0p0fLYW3ewnpgPPtpnPGe6L3wj8Um/rsc6ne8y+N9uZEOGWDiU8f3Y24rNnQz4zcrbpjtLyyFf8VuOs+5d7n9wSi4Q8PY3wIsdarIlqQiNTjyY5d0nV9UBoZW2tPNbERSSRqka38pCSppvBp7diTd2B1oYrA03EowS+cKFYi7hm4abRBztrw4rGGddiFmkRI1zbgQNDm15uvPyaOzs6YXpbLFkFc4avnUCaMWJxllQzOXaZRKAoaZqqx1xVS1Rxoh7Ata4LH1UCMzLVeHKUQMOPxZHzaXidKH4+hdNbe/93EHMVIE1hRaUkerF8fpJ3KTP2h8OeTsWqSNtnwzexwpLWnLezJO7EaE+GlZ7KJi6Ie/Dm+OpsSfdndcjPbEBlz8sOEkr0J9Vhz6CcxceN/dHbt3ms7zu/pGG5jlK6m40XRSyPGFUPoN8427QUlym18VUjP3t0yKHBwbtymNYPLFdchFfDPbwEnL1d7r5pvDAJWtcYHx8c106GzYAppZ4Ny9VtPcFrvd94NR7uxz71+dLy1VYzQI+rVZ6NXOIOUuj9VbF8veP1M6OLJsezq3s2bHJ/fssDLzzG62isiKXa1gJm/QChVy5yd37LtqGwF/vT4Eu1l2KPXvHmePNj6LzLXpiEm1X85FFDS1imD8MPNvQSzo3cnFfN6YRo25DmVuBCY0StimeI0v3IKbX6kIVOjU8qDvXp/EI/PNBNRlEs8bjRsUrZwIbFZahniFiGSKyN9g6gzikt7U+WSquaiqNWxANcYS/CyvkRfXNj4LKka8NhyUEHg8W/LNZgA7Z1V4/x5I0OdBojlhTLXvUlzGV8Nzqtvn8HlXmndN2GlTWXJHrBe/YSLs1JXcGAEz+pvk9hy7oZ3vSLbdtLB5wESzb88AxSzpkxB5UPBej5TsvJzMGOThmb34bOwhwMTRTrAOrndahazNyDcDWFhjXpWDPX5cY6zOnYVqBYdiWFC1RikIXFt5/EukihXs1C06XuUgiVLUi7nM5XoPC+DMuWk6irz96HsGfRoJv+fbGKdZhbMMYtV1EyHWgY2OQMRMVMOwYeuZ3d8KCiMkV/CVe5IimNQm8jTddbk3EUPAvjo10vQEW/aXsc9Qi8hpmw+BQKCz9B4VfOdCGWne252HobQiyfEesFpD/PwYXOHPMAdn4WxY6+C3aabpxpk1Du4/VAsXY0nwrPqi/04UonfFCA16teR4g1hnc/r0AFa9ZSibq9EJ5fQxkd2KpAf6ENqyrjm2mhbqNYxO0W/rZYYqkHaKdoquJk6rCsEcWPUnj67JduwOIehP9+B2cYotSXUD+bxxNPvafv281oIg5z3CZ4/37nCTlnsF8LsG8S8WQjvGzbqUF946mXtj17s0QT4WUr4tnP+Age9T1vqFNuYTX8LYQtjURr4D17+kznNyHRRUc8UDFCYBgQjnhlsFKrbNdTr56jRNudKLglwlCEAT70LvtZbxQwfYgO0EHP4sExvHvlwbHFgsMsbJYmMesvB3iF5g4eoScd6wrNfITHYknXYA3jQ3ktYsloHWADzjRG470Q0lHCtNPC5LNELKGI1dDoYAiDinmTJFF/qQz7MXO4vlvGgNKbLymT72I1DLhPtD7sqFTkGB3wUjw0cdXfoODZH1ucudGVDXbnny0ya9x9vQ+/mZTRefSsHHqWSVh0Bd6G1zFQwcfwcSbWEor1ppAtQPjY5Mzagj6ezLKpFH9NAQr2kYbVsBw2S38vwGNupeePegbmWZQ3m3lhJdNaa+e1GNNtXjvqfXh97dYcFh+OD4scfb+2dl603JZwJfF0Ge7Rbeb5TcyiSuvwJ5HuOL7WOn6iz7OWw+PNo9ZSc1TCaltsznaOikebH5p50aB2l7r/ONcTgm2X3t17jTnfp0VlS92fuhzzS/e6ecjxd8Qa2sbp6fOlpotZ6KjZjERhs9nC5LnVbH7YO9TwjHj+p2bxUPxQEuWPmh9ejxzCapO9KGsutf6qVpjN0CgO/Ml/Eekn0zab+UHgskkPJ3KTgGIuh0WaaNKZT4NAnMvs2mM6UEoil95mkjTA+CFme7AoiLjPsCl3S3HiBixglBMaTZ+TJTwISqVJBp9ECW7jN/GXkxiPfvvUMX7VxyuEDSNmbInrsslxI5pM0jLXxz8sddFwPIEk8GMMuZis0CRgfuQyh9LAIpGPPSE8F44CU+w/PMg7It/7rWWJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCL5r+U/XuCjcKnepi8AAAAASUVORK5CYII="
            />
        </div>
    )
}

export default SearchPage

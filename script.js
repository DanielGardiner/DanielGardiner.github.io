
let navHeight = 56;

let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

let landingPanelContent = document.querySelector('.content').offsetHeight

let updatedLandingPanelHeight = Math.max(viewportHeight - navHeight, landingPanelContent + 100)

document.querySelector('.landing-panel').style.height = updatedLandingPanelHeight + 'px'

$(function() {

    $('#hover-container-proj1').hover(function () {
        $('#proj1-hover').slideToggle(400)
    })

    $('#hover-container-proj2').hover(function () {
        $('#proj2-hover').slideToggle(400)
    })

    $('#hover-container-proj3').hover(function () {
        $('#proj3-hover').slideToggle(400)
    })

    $('#hover-container-proj4').hover(function () {
        $('#proj4-hover').slideToggle(400)
    })
    $('#hover-container-proj5').hover(function () {
        $('#proj5-hover').slideToggle(400)
    })

    $('#hover-container-proj6').hover(function () {
        $('#proj6-hover').slideToggle(400)
    })

    $('#dropdown-button-proj1').click(function () {
        $('#dropdown-section-proj1').slideToggle(500)
        if ($('#proj1-arrow').css("transform") == 'none'){
            $('#proj1-arrow').css("transform", "rotate(180deg)")
        } else {
            $('#proj1-arrow').css("transform", "")
        }
    })

    $('#dropdown-button-proj2').click(function () {
        $('#dropdown-section-proj2').slideToggle(500)
        if ($('#proj2-arrow').css("transform") == 'none'){
            $('#proj2-arrow').css("transform", "rotate(180deg)")
        } else {
            $('#proj2-arrow').css("transform", "")
        }
    })

    $('#dropdown-button-proj3').click(function () {
        $('#dropdown-section-proj3').slideToggle(500)
        if ($('#proj3-arrow').css("transform") == 'none'){
            $('#proj3-arrow').css("transform", "rotate(180deg)")
        } else {
            $('#proj3-arrow').css("transform", "")
        }
    })

    $('#dropdown-button-proj4').click(function () {
        $('#dropdown-section-proj4').slideToggle(500)
        if ($('#proj4-arrow').css("transform") == 'none'){
            $('#proj4-arrow').css("transform", "rotate(180deg)")
        } else {
            $('#proj4-arrow').css("transform", "")
        }
    })

    $('#dropdown-button-proj5').click(function () {
        $('#dropdown-section-proj5').slideToggle(500)
        if ($('#proj5-arrow').css("transform") == 'none'){
            $('#proj5-arrow').css("transform", "rotate(180deg)")
        } else {
            $('#proj5-arrow').css("transform", "")
        }
    })

    $('#dropdown-button-proj6').click(function () {
        $('#dropdown-section-proj6').slideToggle(500)
        if ($('#proj6-arrow').css("transform") == 'none'){
            $('#proj6-arrow').css("transform", "rotate(180deg)")
        } else {
            $('#proj6-arrow').css("transform", "")
        }
    })
})
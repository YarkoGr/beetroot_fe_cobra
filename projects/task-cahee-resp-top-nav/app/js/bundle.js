(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(".navicon").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("navicon--active");
  $(".toggle").toggleClass("toggle--active");
});
AOS.init(); //scroll up start

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  if (rootElement.scrollTop / scrollTotal > 0.1) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll); //scroll up end

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy90YXNrLWNhaGVlLXJlc3AtdG9wLW5hdi9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMsRUFBZCxDQUFpQixPQUFqQixFQUEwQixVQUFTLENBQVQsRUFBWTtBQUNsQyxFQUFBLENBQUMsQ0FBQyxjQUFGO0FBQ0EsRUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsV0FBUixDQUFvQixpQkFBcEI7QUFDQSxFQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxXQUFiLENBQXlCLGdCQUF6QjtBQUNILENBSkQ7QUFNQSxHQUFHLENBQUMsSUFBSixHLENBRUE7O0FBRUEsSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXJCO0FBQ0EsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGVBQTNCOztBQUVBLFNBQVMsWUFBVCxHQUF3QjtBQUNwQjtBQUNBLE1BQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxZQUFaLEdBQTJCLFdBQVcsQ0FBQyxZQUF6RDs7QUFDQSxNQUFJLFdBQVcsQ0FBQyxTQUFaLEdBQXdCLFdBQXhCLEdBQXNDLEdBQTFDLEVBQStDO0FBQzNDO0FBQ0EsSUFBQSxjQUFjLENBQUMsU0FBZixDQUF5QixHQUF6QixDQUE2QixTQUE3QjtBQUNILEdBSEQsTUFHTztBQUNIO0FBQ0EsSUFBQSxjQUFjLENBQUMsU0FBZixDQUF5QixNQUF6QixDQUFnQyxTQUFoQztBQUNIO0FBQ0o7O0FBRUQsU0FBUyxXQUFULEdBQXVCO0FBQ25CO0FBQ0EsRUFBQSxXQUFXLENBQUMsUUFBWixDQUFxQjtBQUNqQixJQUFBLEdBQUcsRUFBRSxDQURZO0FBRWpCLElBQUEsUUFBUSxFQUFFO0FBRk8sR0FBckI7QUFJSDs7QUFDRCxjQUFjLENBQUMsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsV0FBekM7QUFDQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsWUFBcEMsRSxDQUVBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKFwiLm5hdmljb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwibmF2aWNvbi0tYWN0aXZlXCIpO1xyXG4gICAgJChcIi50b2dnbGVcIikudG9nZ2xlQ2xhc3MoXCJ0b2dnbGUtLWFjdGl2ZVwiKTtcclxufSk7XHJcblxyXG5BT1MuaW5pdCgpO1xyXG5cclxuLy9zY3JvbGwgdXAgc3RhcnRcclxuXHJcbmxldCBzY3JvbGxUb1RvcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsVG9Ub3BCdG5cIik7XHJcbmxldCByb290RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgIC8vIERvIHNvbWV0aGluZyBvbiBzY3JvbGxcclxuICAgIGxldCBzY3JvbGxUb3RhbCA9IHJvb3RFbGVtZW50LnNjcm9sbEhlaWdodCAtIHJvb3RFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgIGlmIChyb290RWxlbWVudC5zY3JvbGxUb3AgLyBzY3JvbGxUb3RhbCA+IDAuMSkge1xyXG4gICAgICAgIC8vIFNob3cgYnV0dG9uXHJcbiAgICAgICAgc2Nyb2xsVG9Ub3BCdG4uY2xhc3NMaXN0LmFkZChcInNob3dCdG5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEhpZGUgYnV0dG9uXHJcbiAgICAgICAgc2Nyb2xsVG9Ub3BCdG4uY2xhc3NMaXN0LnJlbW92ZShcInNob3dCdG5cIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xyXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBsb2dpY1xyXG4gICAgcm9vdEVsZW1lbnQuc2Nyb2xsVG8oe1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgIH0pO1xyXG59XHJcbnNjcm9sbFRvVG9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzY3JvbGxUb1RvcCk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbi8vc2Nyb2xsIHVwIGVuZCJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKd2NtOXFaV04wY3k5MFlYTnJMV05oYUdWbExYSmxjM0F0ZEc5d0xXNWhkaTl6Y21NdmFuTXZZWEJ3TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3UVVOQlFTeERRVUZETEVOQlFVTXNWVUZCUkN4RFFVRkVMRU5CUVdNc1JVRkJaQ3hEUVVGcFFpeFBRVUZxUWl4RlFVRXdRaXhWUVVGVExFTkJRVlFzUlVGQldUdEJRVU5zUXl4RlFVRkJMRU5CUVVNc1EwRkJReXhqUVVGR08wRkJRMEVzUlVGQlFTeERRVUZETEVOQlFVTXNTVUZCUkN4RFFVRkVMRU5CUVZFc1YwRkJVaXhEUVVGdlFpeHBRa0ZCY0VJN1FVRkRRU3hGUVVGQkxFTkJRVU1zUTBGQlF5eFRRVUZFTEVOQlFVUXNRMEZCWVN4WFFVRmlMRU5CUVhsQ0xHZENRVUY2UWp0QlFVTklMRU5CU2tRN1FVRk5RU3hIUVVGSExFTkJRVU1zU1VGQlNpeEhMRU5CUlVFN08wRkJSVUVzU1VGQlNTeGpRVUZqTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVZRc1EwRkJkVUlzYVVKQlFYWkNMRU5CUVhKQ08wRkJRMEVzU1VGQlNTeFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRMR1ZCUVROQ096dEJRVVZCTEZOQlFWTXNXVUZCVkN4SFFVRjNRanRCUVVOd1FqdEJRVU5CTEUxQlFVa3NWMEZCVnl4SFFVRkhMRmRCUVZjc1EwRkJReXhaUVVGYUxFZEJRVEpDTEZkQlFWY3NRMEZCUXl4WlFVRjZSRHM3UVVGRFFTeE5RVUZKTEZkQlFWY3NRMEZCUXl4VFFVRmFMRWRCUVhkQ0xGZEJRWGhDTEVkQlFYTkRMRWRCUVRGRExFVkJRU3RETzBGQlF6TkRPMEZCUTBFc1NVRkJRU3hqUVVGakxFTkJRVU1zVTBGQlppeERRVUY1UWl4SFFVRjZRaXhEUVVFMlFpeFRRVUUzUWp0QlFVTklMRWRCU0VRc1RVRkhUenRCUVVOSU8wRkJRMEVzU1VGQlFTeGpRVUZqTEVOQlFVTXNVMEZCWml4RFFVRjVRaXhOUVVGNlFpeERRVUZuUXl4VFFVRm9RenRCUVVOSU8wRkJRMG83TzBGQlJVUXNVMEZCVXl4WFFVRlVMRWRCUVhWQ08wRkJRMjVDTzBGQlEwRXNSVUZCUVN4WFFVRlhMRU5CUVVNc1VVRkJXaXhEUVVGeFFqdEJRVU5xUWl4SlFVRkJMRWRCUVVjc1JVRkJSU3hEUVVSWk8wRkJSV3BDTEVsQlFVRXNVVUZCVVN4RlFVRkZPMEZCUms4c1IwRkJja0k3UVVGSlNEczdRVUZEUkN4alFVRmpMRU5CUVVNc1owSkJRV1lzUTBGQlowTXNUMEZCYUVNc1JVRkJlVU1zVjBGQmVrTTdRVUZEUVN4UlFVRlJMRU5CUVVNc1owSkJRVlFzUTBGQk1FSXNVVUZCTVVJc1JVRkJiME1zV1VGQmNFTXNSU3hEUVVWQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRvS1h0bWRXNWpkR2x2YmlCeUtHVXNiaXgwS1h0bWRXNWpkR2x2YmlCdktHa3NaaWw3YVdZb0lXNWJhVjBwZTJsbUtDRmxXMmxkS1h0MllYSWdZejFjSW1aMWJtTjBhVzl1WENJOVBYUjVjR1Z2WmlCeVpYRjFhWEpsSmlaeVpYRjFhWEpsTzJsbUtDRm1KaVpqS1hKbGRIVnliaUJqS0drc0lUQXBPMmxtS0hVcGNtVjBkWEp1SUhVb2FTd2hNQ2s3ZG1GeUlHRTlibVYzSUVWeWNtOXlLRndpUTJGdWJtOTBJR1pwYm1RZ2JXOWtkV3hsSUNkY0lpdHBLMXdpSjF3aUtUdDBhSEp2ZHlCaExtTnZaR1U5WENKTlQwUlZURVZmVGs5VVgwWlBWVTVFWENJc1lYMTJZWElnY0QxdVcybGRQWHRsZUhCdmNuUnpPbnQ5ZlR0bFcybGRXekJkTG1OaGJHd29jQzVsZUhCdmNuUnpMR1oxYm1OMGFXOXVLSElwZTNaaGNpQnVQV1ZiYVYxYk1WMWJjbDA3Y21WMGRYSnVJRzhvYm54OGNpbDlMSEFzY0M1bGVIQnZjblJ6TEhJc1pTeHVMSFFwZlhKbGRIVnliaUJ1VzJsZExtVjRjRzl5ZEhOOVptOXlLSFpoY2lCMVBWd2lablZ1WTNScGIyNWNJajA5ZEhsd1pXOW1JSEpsY1hWcGNtVW1KbkpsY1hWcGNtVXNhVDB3TzJrOGRDNXNaVzVuZEdnN2FTc3JLVzhvZEZ0cFhTazdjbVYwZFhKdUlHOTljbVYwZFhKdUlISjlLU2dwSWl3aUpDaGNJaTV1WVhacFkyOXVYQ0lwTG05dUtGd2lZMnhwWTJ0Y0lpd2dablZ1WTNScGIyNG9aU2tnZTF4eVhHNGdJQ0FnWlM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4eVhHNGdJQ0FnSkNoMGFHbHpLUzUwYjJkbmJHVkRiR0Z6Y3loY0ltNWhkbWxqYjI0dExXRmpkR2wyWlZ3aUtUdGNjbHh1SUNBZ0lDUW9YQ0l1ZEc5bloyeGxYQ0lwTG5SdloyZHNaVU5zWVhOektGd2lkRzluWjJ4bExTMWhZM1JwZG1WY0lpazdYSEpjYm4wcE8xeHlYRzVjY2x4dVFVOVRMbWx1YVhRb0tUdGNjbHh1WEhKY2JpOHZjMk55YjJ4c0lIVndJSE4wWVhKMFhISmNibHh5WEc1c1pYUWdjMk55YjJ4c1ZHOVViM0JDZEc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Z3aUxuTmpjbTlzYkZSdlZHOXdRblJ1WENJcE8xeHlYRzVzWlhRZ2NtOXZkRVZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUTdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQm9ZVzVrYkdWVFkzSnZiR3dvS1NCN1hISmNiaUFnSUNBdkx5QkVieUJ6YjIxbGRHaHBibWNnYjI0Z2MyTnliMnhzWEhKY2JpQWdJQ0JzWlhRZ2MyTnliMnhzVkc5MFlXd2dQU0J5YjI5MFJXeGxiV1Z1ZEM1elkzSnZiR3hJWldsbmFIUWdMU0J5YjI5MFJXeGxiV1Z1ZEM1amJHbGxiblJJWldsbmFIUTdYSEpjYmlBZ0lDQnBaaUFvY205dmRFVnNaVzFsYm5RdWMyTnliMnhzVkc5d0lDOGdjMk55YjJ4c1ZHOTBZV3dnUGlBd0xqRXBJSHRjY2x4dUlDQWdJQ0FnSUNBdkx5QlRhRzkzSUdKMWRIUnZibHh5WEc0Z0lDQWdJQ0FnSUhOamNtOXNiRlJ2Vkc5d1FuUnVMbU5zWVhOelRHbHpkQzVoWkdRb1hDSnphRzkzUW5SdVhDSXBPMXh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0F2THlCSWFXUmxJR0oxZEhSdmJseHlYRzRnSUNBZ0lDQWdJSE5qY205c2JGUnZWRzl3UW5SdUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb1hDSnphRzkzUW5SdVhDSXBPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCelkzSnZiR3hVYjFSdmNDZ3BJSHRjY2x4dUlDQWdJQzh2SUZOamNtOXNiQ0IwYnlCMGIzQWdiRzluYVdOY2NseHVJQ0FnSUhKdmIzUkZiR1Z0Wlc1MExuTmpjbTlzYkZSdktIdGNjbHh1SUNBZ0lDQWdJQ0IwYjNBNklEQXNYSEpjYmlBZ0lDQWdJQ0FnWW1Wb1lYWnBiM0k2SUZ3aWMyMXZiM1JvWENJc1hISmNiaUFnSUNCOUtUdGNjbHh1ZlZ4eVhHNXpZM0p2Ykd4VWIxUnZjRUowYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aVkyeHBZMnRjSWl3Z2MyTnliMnhzVkc5VWIzQXBPMXh5WEc1a2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aWMyTnliMnhzWENJc0lHaGhibVJzWlZOamNtOXNiQ2s3WEhKY2JseHlYRzR2TDNOamNtOXNiQ0IxY0NCbGJtUWlYWDA9In0=

---
title: Building a Mining Rig
date: 2017-08-18 19:16:23
tags: 
- Mining
- Bitcoin
- Ethereum
---

Building a mining machine is quite costly and challenging as you can imagine. I ran into multiple problems and issues when building this machine. I am going to be breaking this blog in 3 parts(issues/problems, heat concerns/modding,Cost, wrapping everythign up). The first part will be problems and issues I ran into and how I solved them. Hopefully, I can help avoid the mistakes and help fix some issues or problem that you run into. I will be putting the part list at the bottom of the blog with the price breakdown. 
<!--more-->

Man, I ran into so many issues with this machine. It was like a roller coaster of emotions. It got to one point where I just gave up and just left it and came back to it an hour later. It took longer then I thought it would take me. It took my friend and I a total of 5-6 hours to build the machine 	and fix all of the issue. The first issue we ran into was RAM that was faulty. This causes the computer to not boot up no matter what slot we put it into. How we determined that it was faulty was testing on 2 separated motherboard and both pc would not boot up. The second issue we ran into was for some reason Windows 10 only recognizes 4 of our 6 graphic cards. So what we did was upgraded Windows 10, Asus Bios, installed Asus GPU tweak and after multiple restarts it finally worked. The third issue was once we got Windows 10 to recognizes all 6 GPU only 4 GPU were working(in terms of having access the resource). We did not have access to the other 2 base on Windows 10 devices manager. We tried so many different thing such as disabling usbs, hdmi, vga, ethernet. But we found out that all we need to do was enable 4g encoding. The fourth issue was that our miner software “ethminer” did not even boot up. We tried to update it to the newest one and we even tried the beta one as well. We had no luck, we ended up finding a miner called “Claymore dual miner”.  We learnt that this miner is very powerful and fixes all of the issue we had. I will be talking about Claymore in another blog.

After all the problems that we ran into, the biggest issue we were facing was that we ran into was heat problems. For the first iteration of the case we made it small, compact and portable. Due to this the rig was generating so much heat because they were so close to each other. The temperatures of the GPU were around 78-86 degrees. So I had to build another custom case this time I made it a lot bigger and separating in different rows. This improved the heat drastically the average temperatures on the GPU were 61-66 degrees. 

Bellow is the old mining machine:
{% asset_img old-machine.jpg This is the old mining machine %}

Bellow is the new mining machine:
{% asset_img new-machine.jpg This is the new mining machine %}

Here is the breakdown of the cost not including electricity or Windows 10: 
{% table %}
| Computer part name| Price + Tax + Shipping  |
| ------------- | -----:|
| Corsair HX1200i 1200W 80 PLUS Platinum Certified    | $516 |
| Kingston DDR4 RAM 2133 Hyper X |   $56.49 |
| 6 PCS USB 3.0 PCI-E Express |    $109.9 |
| SanDisk SSD PLUS 2.5" 120GB       |   $84.73 |
| Intel Core i3-6100 3M 3.7  |    $175.13|
 | ASUS Z170-E Intel Z170 Motherboard      |   $201.12 |
| ASUS ROG Strix GeForce GTX 1070 8GB Gaming OC (X6)  |    $4,129.02 |
| Misc  |    $50 |
| Total  |    $5,302.47 |
{% endtable %}

I will try to explain why I picked the parts that I did and also explain my thought process. The reason why I picked an Intel i3-6100 was because mining is not really CPU intensive and the processor was on sale. I picked Intel over AMD because during this time AMD chips that not have a really good motherboard equivalent to the amount of z170 PCI slots. The reason why I got 1200W power supply is because 1000W theoretically would work but their would be no wiggle room and we can have more margin of error. I went with an SSD purely for convenience factors and it was fairly cheap compared to its counter part the Hard Drive. We went for 4gb of ram because Mining is really not RAM intensive. In reality you are really just using the OS and the mining software. 

In the end, I personally learnt a lot about building a mining machine. Obviously by the time you read this blog some of the PC parts will be outdated. In particular the GPU most likely will be outdated and outperformed(I hear good thing about AMD new GPU but they have a lot of Power Consumption). Next week I will be talking about Cloud Mining services and talk about Genesis mining in particular. Hopefully this blog will give you a bit more detail in terms building a machine. You can contact me at mrwilliampring@gmail.com or wp@williampring.com if you have any further questions or comment bellow. I will try to get back to you as soon as possible.
---
title: Thinkpad X1 Extreme Gen 2 With Manjaro Setup
date: 2019-12-29T02:12:22.166Z
slug: thinkpad-x1-extreme-gen-2-linux
description: Attempt at getting Nvidia Offloading to work
hero: /static/images/oib44ois27m01.jpg
---
## Install Refind
Don't encrypt drive unless you use a separate partition for /boot/, refind can access the conf files

```pacman -S refind-efi```

```refind-install```

```nano /etc/mkinitcpio.conf```


add battery to modules
mkinitcpio -g /boot/linux-battery-fix.img -k 5.3.7-2-MANJARO

pacman -S xf86-video-intel


reboot

Thunderbolt and HDMI ports go through the nvidia gpu

Manjaro ships with a default configuration for SDDM (the default login manager for KDE) which overrides some keys needed by optimus-manager. To use optimus-manager, you need to edit the file /etc/sddm.conf and simply put a # before the line starting with DisplayCommandand the one starting with DisplayStopCommand.


## Kernel Parameters
i915.enable_dpcd_backlight=1 i915.enable_psr=0 acpi_osi=Linux

## Optimus Manager
https://github.com/Askannz/optimus-manager#important--manjaro-kde-users
https://github.com/Shatur95/optimus-manager-qt
pacman -S optimus-manager optimus-manager-qt
optimus-manager --set-startup
systemctl status optimus-manager.service

## Bumblebee
Install bumblebee
https://wiki.archlinux.org/index.php/Bumblebee
pacman -S bumblebee
gpasswd -a user bumblebee
systemctl enable bumblebeed.service
reboot
test
optirun glxgears -info
external monitor
optirun intel-virtual-output## Install Refind
Don't encrypt drive unless you use a separate partition for /boot/, refind can access the conf files

```pacman -S refind-efi```

```refind-install```

```nano /etc/mkinitcpio.conf```


add battery to modules
mkinitcpio -g /boot/linux-battery-fix.img -k 5.3.7-2-MANJARO

pacman -S xf86-video-intel


reboot

Thunderbolt and HDMI ports go through the nvidia gpu

Manjaro ships with a default configuration for SDDM (the default login manager for KDE) which overrides some keys needed by optimus-manager. To use optimus-manager, you need to edit the file /etc/sddm.conf and simply put a # before the line starting with DisplayCommandand the one starting with DisplayStopCommand.


## Kernel Parameters
i915.enable_dpcd_backlight=1 i915.enable_psr=0 acpi_osi=Linux

## Optimus Manager
https://github.com/Askannz/optimus-manager#important--manjaro-kde-users
https://github.com/Shatur95/optimus-manager-qt
pacman -S optimus-manager optimus-manager-qt
optimus-manager --set-startup
systemctl status optimus-manager.service

## Bumblebee
Install bumblebee
https://wiki.archlinux.org/index.php/Bumblebee
pacman -S bumblebee
gpasswd -a user bumblebee
systemctl enable bumblebeed.service
reboot
test
optirun glxgears -info
external monitor
optirun intel-virtual-output

---
title: "VMware and Hot Adding Hard Disks to a Running CentOS or RHEL Linux System"
layout: "articles/article-page.pug"
summary: "VMware and Hot Adding Hard Disks to a Running CentOS or RHEL Linux System"
featured_image:
create_date: "06-21-2012"
author:
  firstname: "Kyle"
  lastname: "Corupe"
  format: "firstname lastname (username)"
  username: "kcorupe"
tags: [ "centos", "LVM", "RHEL", "VMware" ]
share:
  title: "VMware and Hot Adding Hard Disks to a Running CentOS or RHEL Linux System"
  summary: "VMware and Hot Adding Hard Disks to a Running CentOS or RHEL Linux System"
  href: "###vmware-hot-adding-hard-disks-running-centos-linux-system###"
---
Its possible to extend your disk space on your running virtual machine without even needing to reboot! There are a few caveats obviously, you need to be using LVM (if you are not, SHAME ON YOU!) and be comfortable with file systems and VMware.
*   First add the new Hard Disk in the virtual machine settings.
*   _This can be done on the command line on the ESX server, but in this case I am not trying to extend the primary hard disk but just add another one._

*   Using this script (It was written by someone named Kurt Garloff) [rescan-scsi-bus.sh](http://www.linuxdigest.org/wp-content/uploads/2012/06/rescan-scsi-bus.sh_.txt)

```bash
# ./rescan-sci-bus.sh
```

After executing run dmesg and you should see the new device added, pretty need huh?
![Rescan Example 1](/assets/articles/rescan-sci-bus-1.png)

Once the disk has been added you can execute fdisk to display the new device
![Rescan Example 2](/assets/articles/rescan-sci-bus-2.png)

Using fdisk create a partition, I'm going to asume you'll want to use the entire disk but if desired you could create multiple partitions on the new disk. Here we will just be using the entire disk

```bash
# fdisk /dev/sdb
```


*   Type n for new partition
*   p for primary
*   Just hit enter again to use the default last cylinder since we want to use the entire disk in this case
*   Finally enter w and enter to write the partition table to disk and sync the disk

![Rescan Example 3](/assets/articles/rescan-sci-bus-3.png)


After adding the new partition we have to change the partition type to LVM vs 83  Linux (regular Linux partition type)

```bash
# fdisk /dev/sdb
```

*   t (change partition type)
*   8e (for Linux LVM)
*   And finally w and enter to write changes to disk
*   Now that we have a valid LVM partition we need to Initialize the Physical Volume

```bash
# pvcreate /dev/sdb1
```

*   Here using

```bash
# vgdisplay
```

You can see the VG size prior to adding the new disk ![Rescan Example 4](/assets/articles/rescan-sci-bus-4.png)

Once you have initialized the physical volume you can add it to the volume group that you wish. In this can I want to extend the root volume and I have named it vg00.

```bash
# vgextend vg00 /dev/sdb1
```

![Rescan Example 5](/assets/articles/rescan-sci-bus-5.png)

Once you have added it to the volume group, you should see the newly available free space.

```bash
# vgdisplay
```

![Rescan Example 6](/assets/articles/rescan-sci-bus-6.png)

You can see on the Free PE / Size line that I have 29.97 GB of free space, now lets use it!
What we have to do now is actually extend the logical volume (vg00) so that it consumes the rest of the available space.

_Tip:_ You can find out the path to your volume group with the df command and vgdisplay

```bash
# vgextend -L +29G /dev/vg00/rootvol
```

![Rescan Example 7](/assets/articles/rescan-sci-bus-7.png)

Now that we hav extended the volume we have to extend the file system so the available space can be written to by the system. We do this by using the resize2fs command. Now because I am simply using ext3 this is the command for me, but if you were using a different file system such as xfs you need to use the tool available for that FS (_xfs_grow for example_)

```bash
# resize2fs /dev/mapper/vg00-rootvol
```

![Rescan Example 8](/assets/articles/rescan-sci-bus-8.png)

And thats it! Checkout df to see your newly available disk space.

Check back again for more articles on LVM here at GeekWiki, I will be writing another one on LVM snapshots and choosing the best file system for your needs.

Also a side note, if you are using SAN backed storage like I am (In this case Netapp). You must make sure you align your VMDK before adding it to your vgroup. I will also be writing an article on how to do this and why its important for performance.

Thanks for reading!

Kyle

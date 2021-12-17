import React, { useState } from 'react';
import { debounce } from '../../../../util/Helpers';
import { StaticImage } from "gatsby-plugin-image";
import './overview.css';
import {
  Button, Card, CardBody, Row, Column, Heading, Input, Badge, Breadcrumbs,
  Checkbox, Chip, Divider, Icon, Link, Message, Text, Navigation, VerticalNav,
  Pagination, Pills, ProgressBar, Radio, Slider, StatusHint, Stepper, Switch,
  Tabs, Tab, Toast
} from '@innovaccer/design-system';

function Overview() {

  const data = [
    {
      component: Column,
      props: {
        className: "d-flex justify-content-center",
        children: <StaticImage
          src="./images/Avatars.png"
          alt="Avatars"
        />
      },
      link: 'avatar/usage',
      label: 'Avatars'
    },
    {
      component: Badge,
      props: { appearance: "primary", children: 'Badge' },
      link: 'badges/usage',
      label: 'Badges'
    },
    {
      component: Breadcrumbs,
      props: {
        list: [{ label: "Level 0", },
        { label: "Level 1", },
        { label: "Level 2", },
        { label: "Level 3", },]
      },
      link: 'breadcrumbs/usage',
      label: 'Breadcrumb'
    },
    {
      component: Button,
      props: { appearance: "primary", children: 'Button' },
      link: 'button/usage',
      label: 'Buttons'
    },
    {
      component: Card,
      props: { children: <div className="p-10" /> },
      link: 'card/usage',
      label: 'Card'
    },
    {
      component: Checkbox,
      props: { defaultChecked: true, label: "Label" },
      link: 'checkbox/usage',
      label: 'Checkbox'
    },
    {
      component: Chip,
      props: { clearButton: true, label: "Label", name: "chip", selected: true, type: "selection" },
      link: '',
      label: 'Chips'
    },
    {
      component: Column,
      props: {
        children: <StaticImage
          src="./images/Datepicker.png"
          alt="Calender"
        />
      },
      link: '',
      label: 'Date & Time Picker'
    },
    {
      component: Divider,
      props: { className: 'w-100', appearance: "header" },
      link: '',
      label: 'Dividers'
    },
    {
      component: Button,
      props: { icon: "expand_more", iconAlign: "right", children: 'Selected' },
      link: '',
      label: 'Dropdown'
    },
    {
      component: Column,
      props: {
        children: <div className="d-flex justify-content-center">
          <Icon className="mr-6" appearance="primary_lighter" name="error" size={20} />
          <Icon className="mr-6" appearance="primary" name="upload" size={20} />
          <Icon appearance="primary_dark" name="check_circle" size={20} />
        </div>
      },
      link: '',
      label: 'Icons'
    },
    {
      component: Input,
      props: { className: "min-width-100", value: "Input", onClear: {} },
      link: '',
      label: 'Inputs'
    },
    {
      component: Column,
      props: {
        children: <StaticImage
          src="./images/EditableChipInput.png"
          alt="EditableChipInput"
        />
      },
      link: '',
      label: 'Inline editable fields'
    },
    {
      component: Link,
      props: { children: 'Link' },
      link: '',
      label: 'Links'
    },
    {
      component: Message,
      props: {
        actions: <><Text appearance="link">Action 1</Text><Text appearance="link" className="ml-5">Action 2</Text></>,
        description: "Description goes here",
        title: "Title goes here",
        appearance: "info"
      },
      link: 'message/usage',
      label: 'Message'
    },
    {
      component: Column,
      props: {
        children: <StaticImage
          src="./images/Modal.png"
          alt="Modal"
        />
      },
      link: '',
      label: 'Modal'
    },
    {
      component: Navigation,
      props: {
        align: 'center',
        menus: [
          { name: 'tab1', label: 'Tab #1', },
          { name: 'tab2', label: 'Tab #2' },
          { name: 'tab3', label: 'Tab #3', },
        ],
        active: { name: 'tab1' }
      },
      link: '',
      label: 'Navigation - Horizontal'
    },
    {
      component: Column,
      props: {
        className: "bg-secondary-lightest",
        children: <VerticalNav
          menus={[
            { name: 'Parent_2', label: 'Parent #1', group: 'Section Title', subMenu: [{ name: 'Parent_2.Child_1', label: 'Child #1', }] },
          ]}
          expanded={true}
          className="pb-4"
          active={{ name: 'Parent_2.Child_1' }}
        />
      },
      link: '',
      label: 'Navigation - Vertical'
    },
    {
      component: Pagination,
      props: { onPageChange: function () { }, totalPages: 50 },
      link: '',
      label: 'Pagination'
    },
    {
      component: Column,
      props: {
        children: <div className="d-flex justify-content-center">
          <Pills className="mr-4" appearance="primary" subtle={true}>Pill</Pills>
          <Pills appearance="primary">Pill</Pills>
        </div>
      },
      link: '',
      label: 'Pills'
    },
    {
      component: Card,
      props: {
        shadow: 'dark',
        children: <div className="p-10" />
      },
      link: '',
      label: 'Popover'
    },
    {
      component: ProgressBar,
      props: { value: 50 },
      link: '',
      label: 'Progress indicators'
    },
    {
      component: Radio,
      props: { defaultChecked: true, label: "Label" },
      link: '',
      label: 'Radio'
    },
    {
      component: Column,
      props: {
        children: <div className="bg-secondary scrollbar"></div>,
        className: "d-flex justify-content-center"
      },
      link: '',
      label: 'Scrollbar'
    },
    {
      component: Column,
      props: {
        children: <StaticImage
          src="./images/Sidesheet.png"
          alt="Sidesheet"
        />
      },
      link: '',
      label: 'Sidesheet'
    },
    {
      component: Slider,
      props: { defaultValue: 5, label: "Label", min: 0 },
      link: '',
      label: 'Slider'
    },
    {
      component: StatusHint,
      props: { appearance: "info", children: 'Status' },
      link: '',
      label: 'Status hints'
    },
    {
      component: Stepper,
      props: {
        active: 0,
        steps: [{ label: 'Step 1' }, { label: 'Step 2' }]
      },
      link: '',
      label: 'Steppers'
    },
    {
      component: Switch,
      props: { defaultChecked: true },
      link: '',
      label: 'Switch'
    },
    {
      component: Column,
      props: {
        children: <StaticImage
          src="./images/Table.png"
          alt="Table"
        />
      },
      link: '',
      label: 'Table'
    },
    {
      component: Column,
      props: {
        children: <Tabs>
          <Tab label="Filter #1"></Tab>
          <Tab label="Filter #2"></Tab>
          <Tab label="Filter #3"></Tab>
        </Tabs>
      },
      link: '',
      label: 'Tabs'
    },
    {
      component: Toast,
      props: {
        actions: [{ label: 'Action 1', onClick: function () { } }, { label: 'Action 2', onClick: function () { } }],
        appearance: "info",
        message: "Description goes here.",
        title: "Title goes here"
      },
      link: '',
      label: 'Toast'
    },
    {
      component: Column,
      props: {
        className: "w-25 d-flex justify-content-center",
        children: <div className="Tooltip">
          <Text appearance="white">
            Tooltip
          </Text>
        </div>
      },
      link: '',
      label: 'Tooltip'
    }
  ];

  const [previewList, setPreviewList] = useState(data);

  const onSearchHandler = debounce((target) => {
    const searchList = data
      .filter((item) => item.label.toLowerCase().match(target.value.toLowerCase()));
    setPreviewList(searchList);
  });

  return (
    <div>
      <Input
        className="w-50 my-7"
        icon="search"
        name="input"
        placeholder="Search components"
        onChange={({ target }) => onSearchHandler(target)}
      />

      <Row>
        {
          previewList.length > 0 ?
            previewList.map(({ component, props, label, link }) => {
              return (
                <Column
                  size={4}
                  className="mb-6"
                  onClick={() => link && window.open(`/components/${(link).toLowerCase()}`, "_self")}
                >
                  <div
                    className="mr-6"
                    key={label}
                  >
                    <Card
                      shadow='none'
                      className='w-100 overflow-hidden cursor-pointer overview-card'
                    >
                      <CardBody className="mt-7 mx-4">
                        <div className="overview-cardBody overflow-hidden align-items-center d-flex justify-content-center">
                          {React.createElement(component, props)}
                        </div>
                      </CardBody>
                      <Heading size="s" className="ml-6 my-5">
                        {label}
                      </Heading>
                    </Card>
                  </div>
                </Column>
              )
            }) :
            <Heading size="s" className="mb-5">
              No result found :(
            </Heading>
        }
      </Row>
    </div>
  )
}

export default Overview;

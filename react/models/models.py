# -*- coding: utf-8 -*-

from odoo import models, fields, api, tools

import logging


_logger = logging.getLogger(__name__)

class ReactBase(models.Model):
    _name = 'react.base'
    _descrition = 'Simple ReactJS Components inside Odoo Forms'
    
    name = fields.Char('Text', required=True)
    description = fields.Text('Description')
